const ALLOWED_TOPICS = new Set([
  'Anbefaling',
  'Spørgsmål',
  'Samarbejde',
  'Andet',
]);

let cachedAccessToken = '';
let accessTokenExpiresAt = 0;

const escapeHtml = (value) =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

const corsHeaders = (origin) => ({
  'Access-Control-Allow-Origin': origin,
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Max-Age': '86400',
  Vary: 'Origin',
});

const jsonResponse = (body, status, origin) =>
  Response.json(body, {
    status,
    headers: {
      ...corsHeaders(origin),
      'Cache-Control': 'no-store',
      'X-Content-Type-Options': 'nosniff',
    },
  });

const readText = (value, maximumLength) => {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, maximumLength + 1);
};

const isValidEmail = (email) =>
  email.length <= 200 &&
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const getAccessToken = async (env) => {
  if (cachedAccessToken && Date.now() < accessTokenExpiresAt) {
    return cachedAccessToken;
  }

  const response = await fetch(`${env.ZOHO_ACCOUNTS_URL}/oauth/v2/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      refresh_token: env.ZOHO_REFRESH_TOKEN,
      client_id: env.ZOHO_CLIENT_ID,
      client_secret: env.ZOHO_CLIENT_SECRET,
      grant_type: 'refresh_token',
    }),
  });

  const result = await response.json();

  if (!response.ok || !result.access_token) {
    throw new Error('Zoho token refresh failed');
  }

  cachedAccessToken = result.access_token;
  accessTokenExpiresAt = Date.now() + 55 * 60 * 1000;
  return cachedAccessToken;
};

const verifyTurnstile = async (token, request, env) => {
  const response = await fetch(
    'https://challenges.cloudflare.com/turnstile/v0/siteverify',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        secret: env.TURNSTILE_SECRET_KEY,
        response: token,
        remoteip: request.headers.get('CF-Connecting-IP') ?? undefined,
        idempotency_key: crypto.randomUUID(),
      }),
    },
  );

  const result = await response.json();

  return (
    response.ok &&
    result.success === true &&
    result.action === 'contact' &&
    ['dansknegroniforening.dk', 'www.dansknegroniforening.dk'].includes(
      result.hostname,
    )
  );
};

const detailRow = (label, value) => `
  <tr>
    <td style="padding:10px 0;color:#8f8a86;font-size:13px;width:120px;vertical-align:top;">
      ${escapeHtml(label)}
    </td>
    <td style="padding:10px 0;color:#f3efeb;font-size:15px;vertical-align:top;">
      ${escapeHtml(value)}
    </td>
  </tr>
`;

const buildEmail = ({ name, email, topic, place, message }) => {
  const replyUrl = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(
    `Vedr. din ${topic.toLowerCase()} til Dansk Negroni Forening`,
  )}`;

  return `
<!doctype html>
<html lang="da">
  <body style="margin:0;padding:0;background:#171514;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#171514;">
      <tr>
        <td align="center" style="padding:32px 16px;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:620px;background:#211e1c;border:1px solid #3b322e;border-radius:12px;overflow:hidden;">
            <tr>
              <td style="padding:28px 32px;background:#8f261f;">
                <div style="color:#f8e9dc;font-size:12px;font-weight:bold;letter-spacing:1.6px;text-transform:uppercase;">
                  Dansk Negroni Forening
                </div>
                <h1 style="margin:8px 0 0;color:#ffffff;font-size:26px;line-height:1.25;">
                  Ny ${escapeHtml(topic.toLowerCase())}
                </h1>
              </td>
            </tr>
            <tr>
              <td style="padding:28px 32px 8px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
                  ${detailRow('Navn', name)}
                  ${detailRow('E-mail', email)}
                  ${detailRow('Henvendelse', topic)}
                  ${place ? detailRow('Lokation', place) : ''}
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:18px 32px 6px;">
                <div style="color:#8f8a86;font-size:12px;font-weight:bold;letter-spacing:1px;text-transform:uppercase;margin-bottom:10px;">
                  Besked
                </div>
                <div style="padding:18px;background:#191715;border-left:3px solid #b83a2f;border-radius:4px;color:#f3efeb;font-size:15px;line-height:1.65;white-space:pre-wrap;">${escapeHtml(
                  message,
                )}</div>
              </td>
            </tr>
            <tr>
              <td style="padding:26px 32px 32px;">
                <a href="${escapeHtml(
                  replyUrl,
                )}" style="display:inline-block;padding:13px 20px;background:#b83a2f;color:#ffffff;text-decoration:none;font-size:14px;font-weight:bold;border-radius:5px;">
                  Besvar ${escapeHtml(name)}
                </a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const origin = request.headers.get('Origin') ?? '';
    const allowedOrigins = new Set([
      env.ALLOWED_ORIGIN,
      env.ALLOWED_ORIGIN.replace('https://', 'https://www.'),
    ]);

    if (!allowedOrigins.has(origin)) {
      return new Response('Forbidden', { status: 403 });
    }

    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: corsHeaders(origin),
      });
    }

    if (url.pathname !== '/contact' || request.method !== 'POST') {
      return jsonResponse({ error: 'Not found' }, 404, origin);
    }

    const contentLength = Number(request.headers.get('Content-Length') ?? 0);
    if (contentLength > 15_000) {
      return jsonResponse({ error: 'Payload too large' }, 413, origin);
    }

    let payload;
    try {
      payload = await request.json();
    } catch {
      return jsonResponse({ error: 'Invalid request' }, 400, origin);
    }

    const honey = readText(payload.honey, 200);
    if (honey) {
      return jsonResponse({ success: true }, 200, origin);
    }

    const name = readText(payload.name, 200);
    const email = readText(payload.email, 200);
    const topic = readText(payload.topic, 30);
    const place = readText(payload.place, 200);
    const message = readText(payload.message, 2_000);
    const turnstileToken = readText(payload.turnstileToken, 2_048);

    if (
      !name ||
      name.length > 200 ||
      !isValidEmail(email) ||
      !ALLOWED_TOPICS.has(topic) ||
      place.length > 200 ||
      !message ||
      message.length > 2_000 ||
      !turnstileToken
    ) {
      return jsonResponse({ error: 'Invalid submission' }, 400, origin);
    }

    const verified = await verifyTurnstile(turnstileToken, request, env);
    if (!verified) {
      return jsonResponse({ error: 'Verification failed' }, 403, origin);
    }

    try {
      const accessToken = await getAccessToken(env);
      const response = await fetch(
        `${env.ZOHO_MAIL_API_URL}/accounts/${env.ZOHO_ACCOUNT_ID}/messages`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Zoho-oauthtoken ${accessToken}`,
          },
          body: JSON.stringify({
            fromAddress: env.MAIL_FROM,
            toAddress: env.MAIL_TO,
            replyTo: email,
            subject: `${topic} fra ${name} · Dansk Negroni Forening`,
            content: buildEmail({ name, email, topic, place, message }),
            mailFormat: 'html',
            encoding: 'UTF-8',
          }),
        },
      );

      if (!response.ok) {
        cachedAccessToken = '';
        accessTokenExpiresAt = 0;
        throw new Error('Zoho send failed');
      }

      return jsonResponse({ success: true }, 200, origin);
    } catch {
      return jsonResponse(
        { error: 'Message could not be sent' },
        502,
        origin,
      );
    }
  },
};

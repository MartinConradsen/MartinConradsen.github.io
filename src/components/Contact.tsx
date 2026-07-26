import React, { useEffect, useRef, useState } from 'react';
import PageWrapper from './PageWrapper';
import Footer from './Footer';
import '../styles/contact.css';

type SubmissionState = 'idle' | 'sending' | 'success' | 'error';

type TurnstileApi = {
  render: (
    container: HTMLElement,
    options: {
      sitekey: string;
      action: string;
      appearance: 'interaction-only';
      theme: 'dark';
      callback: (token: string) => void;
      'expired-callback': () => void;
      'error-callback': () => void;
    },
  ) => string;
  remove: (widgetId: string) => void;
  reset: (widgetId: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

const endpoint =
  'https://dansknegroniforening.martinconradsenop.workers.dev/contact';
const turnstileSiteKey = '0x4AAAAAAD-VrJ1F9t1keL75';
const turnstileScriptId = 'cloudflare-turnstile-script';

const Contact: React.FC = () => {
  const [submissionState, setSubmissionState] = useState<SubmissionState>('idle');
  const [topic, setTopic] = useState('Anbefaling');
  const [turnstileToken, setTurnstileToken] = useState('');
  const turnstileContainerRef = useRef<HTMLDivElement>(null);
  const turnstileWidgetIdRef = useRef<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const renderTurnstile = () => {
      if (
        cancelled ||
        !window.turnstile ||
        !turnstileContainerRef.current ||
        turnstileWidgetIdRef.current
      ) {
        return;
      }

      turnstileWidgetIdRef.current = window.turnstile.render(
        turnstileContainerRef.current,
        {
          sitekey: turnstileSiteKey,
          action: 'contact',
          appearance: 'interaction-only',
          theme: 'dark',
          callback: setTurnstileToken,
          'expired-callback': () => setTurnstileToken(''),
          'error-callback': () => setTurnstileToken(''),
        },
      );
    };

    const existingScript = document.getElementById(
      turnstileScriptId,
    ) as HTMLScriptElement | null;

    if (existingScript) {
      if (window.turnstile) {
        renderTurnstile();
      } else {
        existingScript.addEventListener('load', renderTurnstile);
      }
    } else {
      const script = document.createElement('script');
      script.id = turnstileScriptId;
      script.src =
        'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
      script.async = true;
      script.defer = true;
      script.addEventListener('load', renderTurnstile);
      document.head.appendChild(script);
    }

    return () => {
      cancelled = true;
      existingScript?.removeEventListener('load', renderTurnstile);

      if (turnstileWidgetIdRef.current && window.turnstile) {
        window.turnstile.remove(turnstileWidgetIdRef.current);
        turnstileWidgetIdRef.current = null;
      }
    };
  }, []);

  const clearValidationMessage = <
    T extends HTMLInputElement | HTMLTextAreaElement
  >(event: React.FormEvent<T>) => {
    event.currentTarget.setCustomValidity('');
  };

  const showValidationMessage = <
    T extends HTMLInputElement | HTMLTextAreaElement
  >(event: React.InvalidEvent<T>) => {
    const field = event.currentTarget;

    if (field.validity.valueMissing) {
      field.setCustomValidity('Udfyld venligst dette felt.');
      return;
    }

    if (field instanceof HTMLInputElement && field.type === 'email' && field.validity.typeMismatch) {
      field.setCustomValidity('Angiv venligst en gyldig e-mailadresse.');
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const message = String(formData.get('message') ?? '').trim();
    const place = String(formData.get('place') ?? '').trim();

    setSubmissionState('sending');

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          topic,
          place,
          message,
          honey: String(formData.get('_honey') ?? ''),
          turnstileToken,
        }),
      });

      if (!response.ok) {
        throw new Error('Anmodningen mislykkedes');
      }

      form.reset();
      setTopic('Anbefaling');
      setSubmissionState('success');
      setTurnstileToken('');

      if (turnstileWidgetIdRef.current && window.turnstile) {
        window.turnstile.reset(turnstileWidgetIdRef.current);
      }
    } catch {
      setSubmissionState('error');
      setTurnstileToken('');

      if (turnstileWidgetIdRef.current && window.turnstile) {
        window.turnstile.reset(turnstileWidgetIdRef.current);
      }
    }
  };

  return (
    <PageWrapper>
      <section className="contact">
        <div className="contact-heading">
          <h1>Kontakt</h1>
          <p>Send os en anbefaling, et spørgsmål eller en god negroni-observation.</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-grid">
            <label className="contact-field">
              <span>Navn</span>
              <input
                type="text"
                name="name"
                autoComplete="name"
                maxLength={200}
                required
                onInput={clearValidationMessage}
                onInvalid={showValidationMessage}
              />
            </label>

            <label className="contact-field">
              <span>E-mail</span>
              <input
                type="email"
                name="email"
                autoComplete="email"
                maxLength={200}
                required
                onInput={clearValidationMessage}
                onInvalid={showValidationMessage}
              />
            </label>
          </div>

          <label className="contact-field">
            <span>Hvad handler det om?</span>
            <select
              name="topic"
              value={topic}
              onChange={(event) => setTopic(event.target.value)}
            >
              <option>Anbefaling</option>
              <option>Spørgsmål</option>
              <option>Samarbejde</option>
              <option>Andet</option>
            </select>
          </label>

          {topic === 'Anbefaling' && (
            <label className="contact-field">
              <span>Lokation</span>
              <input
                type="text"
                name="place"
                placeholder="Bar eller restaurant"
                maxLength={200}
              />
            </label>
          )}

          <label className="contact-field">
            <span>Besked</span>
            <textarea
              maxLength={2000}
              name="message"
              rows={7}
              placeholder="Fortæl os, hvad vi bør vide."
              required
              onInput={clearValidationMessage}
              onInvalid={showValidationMessage}
            />
          </label>

          <label className="contact-honeypot" aria-hidden="true">
            <span>Lad dette felt være tomt</span>
            <input type="text" name="_honey" tabIndex={-1} autoComplete="off" />
          </label>

          <div ref={turnstileContainerRef} className="contact-turnstile" />

          <div className="contact-actions">
            <button
              type="submit"
              disabled={submissionState === 'sending' || !turnstileToken}
            >
              {submissionState === 'sending' ? 'Sender...' : 'Send besked'}
            </button>
            <p
              className={`contact-status${submissionState === 'error' ? ' error' : ''}`}
              role="status"
              aria-live="polite"
            >
              {submissionState === 'success' && 'Tak. Din besked er sendt.'}
              {submissionState === 'error' && 'Beskeden kunne ikke sendes lige nu. Prøv igen.'}
            </p>
          </div>
        </form>
      </section>
      <Footer />
    </PageWrapper>
  );
};

export default Contact;

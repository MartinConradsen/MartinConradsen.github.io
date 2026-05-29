import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');
const outDir = join(rootDir, 'docs');
const siteUrl = 'https://dansknegroniforening.dk';

const routes = ['articles', 'score', 'recommendations', 'faq', 'contact'];

const indexPath = join(outDir, 'index.html');
const baseHtml = await readFile(indexPath, 'utf8');

await writeFile(join(outDir, '404.html'), baseHtml);

for (const route of routes) {
  const routeDir = join(outDir, route);
  const routeUrl = `${siteUrl}/${route}/`;
  const routeHtml = baseHtml
    .replace(
      /<link rel="canonical" href="[^"]+" \/>/,
      `<link rel="canonical" href="${routeUrl}" />`,
    )
    .replace(
      /<meta property="og:url" content="[^"]+" \/>/,
      `<meta property="og:url" content="${routeUrl}" />`,
    );

  await mkdir(routeDir, { recursive: true });
  await writeFile(join(routeDir, 'index.html'), routeHtml);
}

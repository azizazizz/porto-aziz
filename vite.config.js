import { existsSync } from 'node:fs'
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// With appType 'mpa' Vite answers an unknown path with a bare, empty 404.
// Static hosts serve 404.html instead, so do the same in dev and preview.
function notFoundPage() {
  const root = import.meta.dirname

  // `dir` is where real files live (project root in dev, dist in preview):
  // anything that exists there, and "/" itself, is left to Vite.
  const serve = (dir, getHtml) => (server) => {
    server.middlewares.use(async (req, res, next) => {
      if (req.method !== 'GET' || !req.headers.accept?.includes('text/html')) return next()
      const path = decodeURIComponent(req.url.split('?')[0])
      if (path === '/' || existsSync(resolve(dir, `.${path}`))) return next()
      try {
        const html = await getHtml(req.url)
        res.statusCode = 404
        res.setHeader('Content-Type', 'text/html')
        res.end(html)
      } catch {
        next()
      }
    })
  }

  return {
    name: 'not-found-page',
    configureServer: (server) => () =>
      serve(root, async (url) =>
        server.transformIndexHtml(url, await readFile(resolve(root, '404.html'), 'utf-8')),
      )(server),
    configurePreviewServer: (server) => () =>
      serve(resolve(root, 'dist'), () => readFile(resolve(root, 'dist/404.html'), 'utf-8'))(
        server,
      ),
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), notFoundPage()],
  // Multi-page, not SPA: by default dev/preview answer every unknown path with
  // index.html, so a wrong link would show the portfolio instead of a 404.
  appType: 'mpa',
  build: {
    // Three entries: the portfolio, the standalone privacy notice and the 404
    // page. Listing them here is what makes Vite emit privacy.html and
    // 404.html in the build (static hosts serve 404.html for unknown paths);
    // a router would be a dependency for extra pages that never need one.
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        privacy: resolve(import.meta.dirname, 'privacy.html'),
        notFound: resolve(import.meta.dirname, '404.html'),
      },
    },
  },
})

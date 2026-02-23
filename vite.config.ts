import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [
      react(),
      {
        name: 'api-news-dev',
        configureServer(server) {
          server.middlewares.use('/api/news', async (req, res) => {
            const key = env.GNEWS_API_KEY;
            if (!key) {
              res.writeHead(500, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ error: 'GNEWS_API_KEY not set in .env.local' }));
              return;
            }
            const url = `https://gnews.io/api/v4/search?q=Bénin&lang=fr&max=9&sortby=publishedAt&token=${key}`;
            try {
              const response = await fetch(url);
              const data = await response.json();
              res.writeHead(200, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify(data));
            } catch {
              res.writeHead(500, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ error: 'Failed to fetch news' }));
            }
          });
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
  };
});

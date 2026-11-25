import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.resolve(__dirname, '..', 'dist');
const PORT = 4321;
const HOST = '0.0.0.0';

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf'
};

const server = http.createServer((req, res) => {
  req.on('error', (err) => {
    console.error('Request stream error:', err);
  });
  res.on('error', (err) => {
    console.error('Response stream error:', err);
  });

  try {
    const parsedUrl = new URL(req.url, `http://${req.headers.host || '127.0.0.1:4321'}`);
    let pathname = decodeURIComponent(parsedUrl.pathname);

    // Normalize path to prevent path traversal
    let safePath = path.normalize(pathname).replace(/^(\.\.[\/\\])+/, '');
    let targetPath = path.join(DIST_DIR, safePath);

    // If path is a directory, look for index.html
    if (fs.existsSync(targetPath) && fs.statSync(targetPath).isDirectory()) {
      targetPath = path.join(targetPath, 'index.html');
    } else if (!fs.existsSync(targetPath) && fs.existsSync(targetPath + '.html')) {
      targetPath = targetPath + '.html';
    } else if (!fs.existsSync(targetPath) && fs.existsSync(path.join(targetPath, 'index.html'))) {
      targetPath = path.join(targetPath, 'index.html');
    }

    if (fs.existsSync(targetPath) && fs.statSync(targetPath).isFile()) {
      const ext = path.extname(targetPath).toLowerCase();
      const contentType = MIME_TYPES[ext] || 'application/octet-stream';
      
      res.setHeader('Content-Type', contentType);
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
      res.setHeader('X-Content-Type-Options', 'nosniff');
      res.setHeader('Access-Control-Allow-Origin', '*');
      
      const stream = fs.createReadStream(targetPath);
      stream.on('error', (streamErr) => {
        console.error('File stream error:', streamErr);
        if (!res.headersSent) {
          res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
          res.end('500 Internal Server Error');
        }
      });
      res.writeHead(200);
      stream.pipe(res);
      return;
    }

    // Fallback to 404.html
    const notFoundPath = path.join(DIST_DIR, '404.html');
    if (fs.existsSync(notFoundPath)) {
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.writeHead(404);
      const stream = fs.createReadStream(notFoundPath);
      stream.on('error', () => {
        res.end('404 Not Found');
      });
      stream.pipe(res);
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404 Not Found');
    }
  } catch (err) {
    console.error('Routing error:', err);
    if (!res.headersSent) {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('500 Internal Server Error');
    }
  }
});

server.on('error', (err) => {
  console.error('HTTP Server socket error:', err);
});

server.listen(PORT, HOST, () => {
  console.log(`Server running at http://127.0.0.1:${PORT}/ (listening on ${HOST}:${PORT})`);
});

// Keep process running stably
setInterval(() => {}, 60000);

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
});
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

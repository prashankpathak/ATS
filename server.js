import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
// Cloud Run injects PORT; fallback to 3000 for local dev
const PORT = parseInt(process.env.PORT || '3000', 10);

// Serve production static assets from dist
const distPath = path.join(__dirname, 'dist');
app.use(express.static(distPath));

// Health check endpoint for Cloud Run container probes
app.get('/healthz', (_req, res) => {
  res.status(200).send('OK');
});

// Single Page Application routing: serve index.html for all other routes
app.get('*', (_req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`ATS Logistics production server listening on http://0.0.0.0:${PORT}`);
});

#!/usr/bin/env bun

const path = require('path');

const DIST_DIR = path.join(__dirname, '..', 'dist');

const server = Bun.serve({
  port: process.env.PORT || 4000,
  async fetch(req) {
    const url = new URL(req.url);
    let pathname = url.pathname;

    // Default to index.html
    if (pathname === '/') {
      pathname = '/index.html';
    }

    // Try to serve the file
    const filePath = path.join(DIST_DIR, pathname);
    const file = Bun.file(filePath);

    if (await file.exists()) {
      return new Response(file);
    }

    // Try adding .html extension
    const htmlPath = filePath + '.html';
    const htmlFile = Bun.file(htmlPath);

    if (await htmlFile.exists()) {
      return new Response(htmlFile);
    }

    return new Response('Not Found', { status: 404 });
  },
});

console.log(`Dev server running at http://localhost:${server.port}`);

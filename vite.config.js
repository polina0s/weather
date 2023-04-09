import { defineConfig } from 'vite';
import vitePugPlugin from 'vite-plugin-pug-transformer';
import dotenv from 'dotenv';

dotenv.config(); // load env vars from .env

export default defineConfig({
  plugins: [vitePugPlugin()],
  build: {
    rollupOptions: {
      input: {
        app: './src/index.html',
      },
    },
  },
  server: {
    open: './src/index.html',
  },
  base: './',
});

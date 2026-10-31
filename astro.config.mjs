import { defineConfig } from 'astro/config';
export default defineConfig({ output: 'static', vite: { optimizeDeps: { entries: ['src/pages/**/*.astro', '!src/assets/**'], exclude: ['react'] } } });

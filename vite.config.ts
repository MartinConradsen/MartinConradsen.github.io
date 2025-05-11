// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/MartinConradsen.github.io/', // 👈 Important!
  plugins: [react()],
});

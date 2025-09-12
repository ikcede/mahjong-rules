import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';

/**
 * Config file for building main.js and main.d.ts
 */
export default defineConfig({
  base: '/mahjong-rules/',
  plugins: [react(), viteTsconfigPaths()],
  root: './app',
  publicDir: './public',
});

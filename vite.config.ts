import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // listen on 0.0.0.0 so Docker / LAN devices can reach the dev server
    port: 5173,
    allowedHosts: true,
    watch: {
      // Needed for hot reload on bind mounts (Docker Desktop on macOS/Windows).
      usePolling: process.env.CHOKIDAR_USEPOLLING === 'true',
    },
  },
  preview: {
    host: true,
    port: 4173,
    allowedHosts: true,
  },
});

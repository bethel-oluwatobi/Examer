import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss'

export default defineConfig({
  plugins: [ react() ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts', // Optional: Custom test setup
  },
  css: {
    postcss: {
      plugins: [ tailwindcss() ],
    },
  }
});

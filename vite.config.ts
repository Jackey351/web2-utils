import reactRefresh from '@vitejs/plugin-react-refresh';
import { defineConfig } from 'vite';
import { resolve } from 'path';

const config = defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  esbuild: {
    jsxFactory: 'jsx',
  },
  define: {
    'process.env': {},
  },
  server: {
    port: 3009,
    host: '0.0.0.0',
    proxy: {},
  }
});

export default config;

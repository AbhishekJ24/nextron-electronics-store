import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return defineConfig({
    base: env.VITE_ROUTER_BASE_URL || '/',
    plugins: [react()],
    define: {
      'process.env': {
        VITE_KEY_ID: env.VITE_KEY_ID,
        VITE_KEY_SECRET: env.VITE_KEY_SECRET,
      },
    },
  });
};

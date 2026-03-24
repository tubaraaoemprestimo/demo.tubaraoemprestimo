import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  // process.env.VITE_DEMO_MODE é injetado pelo Vercel (e pelo cross-env local)
  // loadEnv lê arquivos .env.* — combinar os dois garante que o alias funcione em ambos
  const IS_DEMO = env.VITE_DEMO_MODE === 'true' || process.env.VITE_DEMO_MODE === 'true';
  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
      strictPort: false,
      // Permite acesso por qualquer hostname/porta (proxy, tunnels, portas diferentes)
      allowedHosts: 'all',
      hmr: {
        // Sem clientPort definido: usa a porta atual do browser automaticamente
        clientPort: undefined,
      },
    },
    plugins: [react()],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      // Expõe VITE_DEMO_MODE como import.meta.env para o código React
      'import.meta.env.VITE_DEMO_MODE': JSON.stringify(IS_DEMO ? 'true' : 'false'),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
        // Demo mode: troca apiClient pelo mock em build-time.
        // IS_DEMO combina loadEnv (local) + process.env (Vercel CI)
        ...(IS_DEMO && {
          './apiClient': path.resolve(__dirname, 'services/mockApiClient.ts'),
          '../apiClient': path.resolve(__dirname, 'services/mockApiClient.ts'),
        }),
      }
    },
    optimizeDeps: {
      include: ['html2pdf.js'],
    },
    build: {
      outDir: 'dist',
      sourcemap: false,
      minify: 'esbuild',
      commonjsOptions: {
        include: [/html2pdf/, /node_modules/],
        transformMixedEsModules: true,
      },
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom', 'react-router-dom'],
            charts: ['recharts'],
            icons: ['lucide-react']
          }
        }
      }
    }
  };
});
// Force Vercel rebuild: 2026-03-24T13:34:47

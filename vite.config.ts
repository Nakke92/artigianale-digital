import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "scheduler"],
  },
  build: {
    rollupOptions: {
      output: {},
      external: []
    },
    target: 'es2015',
    minify: 'esbuild',
    cssMinify: true,
    cssCodeSplit: true,
    reportCompressedSize: false,
    chunkSizeWarningLimit: 500
  },
  optimizeDeps: {
    include: [
      'react', 
      'react-dom', 
      'react-router-dom',
      '@radix-ui/react-dialog',
      '@radix-ui/react-toast', 
      '@radix-ui/react-dropdown-menu',
      'lucide-react',
      '@supabase/supabase-js'
    ],
    force: false
  }
}));

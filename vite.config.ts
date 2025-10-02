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
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Core React libraries
          if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
            return 'react-vendor';
          }
          // Radix UI components - split by frequency of use
          if (id.includes('@radix-ui/react-dialog') || id.includes('@radix-ui/react-toast') || id.includes('@radix-ui/react-dropdown-menu')) {
            return 'ui-core';
          }
          if (id.includes('@radix-ui')) {
            return 'ui-extended';
          }
          // Supabase and database
          if (id.includes('@supabase') || id.includes('@tanstack/react-query')) {
            return 'database';
          }
          // Icons and utilities
          if (id.includes('lucide-react')) {
            return 'icons';
          }
          if (id.includes('clsx') || id.includes('tailwind-merge') || id.includes('class-variance-authority')) {
            return 'utils';
          }
          // Large third-party libraries
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      },
      external: [],
      treeshake: {
        moduleSideEffects: false
      }
    },
    target: 'es2015',
    minify: 'esbuild',
    cssMinify: true,
    cssCodeSplit: false,
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

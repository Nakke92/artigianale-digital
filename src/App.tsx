import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { AuthProvider } from "@/contexts/AuthContext";
import { CartProvider } from "@/contexts/CartContext";
import { LoadingPlaceholder } from "@/components/LoadingPlaceholder";
import ErrorBoundary from "@/components/ErrorBoundary";
import Index from "./pages/Index";

// Lazy load non-critical pages for better performance
const Catalogo = lazy(() => import("./pages/Catalogo"));
const ChiSiamo = lazy(() => import("./pages/ChiSiamo"));
const Blog = lazy(() => import("./pages/Blog"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Contatti = lazy(() => import("./pages/Contatti"));
const Newsletter = lazy(() => import("./pages/Newsletter"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const Admin = lazy(() => import("./pages/Admin"));
const Auth = lazy(() => import("./pages/Auth"));
const Carrello = lazy(() => import("./pages/Carrello"));
const Successo = lazy(() => import("./pages/Successo"));
const NotFound = lazy(() => import("./pages/NotFound"));
const BlogArticle = lazy(() => import("./pages/BlogArticle"));
const TestPage = lazy(() => import("./pages/TestPage"));

// Enhanced loading component
const PageLoader = () => (
  <div className="min-h-screen bg-black-glossy flex items-center justify-center">
    <LoadingPlaceholder className="w-32 h-32 rounded-lg" />
  </div>
);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <CartProvider>
          <Toaster />
          <Sonner />
          <ErrorBoundary>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/catalogo" element={
                  <Suspense fallback={<PageLoader />}>
                    <Catalogo />
                  </Suspense>
                } />
                <Route path="/chi-siamo" element={
                  <Suspense fallback={<PageLoader />}>
                    <ChiSiamo />
                  </Suspense>
                } />
                <Route path="/blog" element={
                  <Suspense fallback={<PageLoader />}>
                    <Blog />
                  </Suspense>
                } />
                <Route path="/blog/:slug" element={
                  <Suspense fallback={<PageLoader />}>
                    <BlogArticle />
                  </Suspense>
                } />
                <Route path="/faq" element={
                  <Suspense fallback={<PageLoader />}>
                    <FAQ />
                  </Suspense>
                } />
                <Route path="/contatti" element={
                  <Suspense fallback={<PageLoader />}>
                    <Contatti />
                  </Suspense>
                } />
                <Route path="/newsletter" element={
                  <Suspense fallback={<PageLoader />}>
                    <Newsletter />
                  </Suspense>
                } />
                <Route path="/privacy" element={
                  <Suspense fallback={<PageLoader />}>
                    <Privacy />
                  </Suspense>
                } />
                <Route path="/terms" element={
                  <Suspense fallback={<PageLoader />}>
                    <Terms />
                  </Suspense>
                } />
                <Route path="/admin" element={
                  <Suspense fallback={<PageLoader />}>
                    <Admin />
                  </Suspense>
                } />
                <Route path="/auth" element={
                  <Suspense fallback={<PageLoader />}>
                    <Auth />
                  </Suspense>
                } />
                <Route path="/carrello" element={
                  <Suspense fallback={<PageLoader />}>
                    <Carrello />
                  </Suspense>
                } />
                <Route path="/successo" element={
                  <Suspense fallback={<PageLoader />}>
                    <Successo />
                  </Suspense>
                } />
                <Route path="/test" element={
                  <Suspense fallback={<PageLoader />}>
                    <TestPage />
                  </Suspense>
                } />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={
                  <Suspense fallback={<PageLoader />}>
                    <NotFound />
                  </Suspense>
                } />
              </Routes>
            </BrowserRouter>
          </ErrorBoundary>
        </CartProvider>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

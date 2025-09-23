import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { AuthProvider } from "@/contexts/AuthContext";
import { CartProvider } from "@/contexts/CartContext";
import Index from "./pages/Index";
import Catalogo from "./pages/Catalogo";
import ChiSiamo from "./pages/ChiSiamo";
import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";
import Contatti from "./pages/Contatti";
import Newsletter from "./pages/Newsletter";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import Carrello from "./pages/Carrello";
import Successo from "./pages/Successo";
import NotFound from "./pages/NotFound";
import BlogArticle from "./pages/BlogArticle";

const TestPage = lazy(() => import("./pages/TestPage"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <CartProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/catalogo" element={<Catalogo />} />
              <Route path="/chi-siamo" element={<ChiSiamo />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogArticle />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contatti" element={<Contatti />} />
              <Route path="/newsletter" element={<Newsletter />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/carrello" element={<Carrello />} />
          <Route path="/successo" element={<Successo />} />
          <Route path="/test" element={
            <Suspense fallback={<div>Loading...</div>}>
              <TestPage />
            </Suspense>
          } />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

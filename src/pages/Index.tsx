import { Header } from '@/components/Header';
import { HomeHero, HomeFeatures } from '@/components/HomeHero';
import { Footer } from '@/components/Footer';
import { CookieBanner } from '@/components/CookieBanner';
import { PerformanceOptimizer } from '@/components/PerformanceOptimizer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <PerformanceOptimizer />
      <Header />
      <main className="pt-20">
        <HomeHero />
        <HomeFeatures />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Index;

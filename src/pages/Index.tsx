import { Header } from '@/components/Header';
import { HomeHero, HomeFeatures } from '@/components/HomeHero';
import { Footer } from '@/components/Footer';
import { CookieBanner } from '@/components/CookieBanner';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HomeHero />
        <HomeFeatures />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Index;

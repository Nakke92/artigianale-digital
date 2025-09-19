import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Footer } from '@/components/Footer';
import { AgeGate } from '@/components/AgeGate';
import { CookieBanner } from '@/components/CookieBanner';

const Index = () => {
  const [isAgeVerified, setIsAgeVerified] = useState(false);

  useEffect(() => {
    // Check if user has already verified age
    const ageVerified = localStorage.getItem('ageVerified');
    const ageVerifiedDate = localStorage.getItem('ageVerifiedDate');
    
    if (ageVerified === 'true' && ageVerifiedDate) {
      // Check if verification is still valid (24 hours)
      const verificationDate = new Date(ageVerifiedDate);
      const now = new Date();
      const hoursDiff = (now.getTime() - verificationDate.getTime()) / (1000 * 60 * 60);
      
      if (hoursDiff < 24) {
        setIsAgeVerified(true);
      } else {
        // Clear expired verification
        localStorage.removeItem('ageVerified');
        localStorage.removeItem('ageVerifiedDate');
      }
    }
  }, []);

  const handleAgeVerified = () => {
    setIsAgeVerified(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {!isAgeVerified && (
        <AgeGate onVerified={handleAgeVerified} />
      )}
      
      {isAgeVerified && (
        <>
          <Header />
          <main>
            <Hero />
            {/* Additional sections will be added here */}
          </main>
          <Footer />
          <CookieBanner />
        </>
      )}
    </div>
  );
};

export default Index;

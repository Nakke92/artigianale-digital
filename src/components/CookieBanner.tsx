import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { X, Cookie } from 'lucide-react';

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Show banner after a small delay
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setIsVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setIsVisible(false);
  };

  const closeBanner = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 animate-slide-in-right">
      <Card className="bg-black-glossy/90 backdrop-blur-xl border-2 border-gold-primary/50 shadow-2xl hover:shadow-gold-primary/30 transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <Cookie className="h-6 w-6 text-gold-primary mt-1 flex-shrink-0 animate-pulse" />
            <div className="flex-1 space-y-4">
              <div>
                <h3 className="font-anton text-lg text-gold-primary mb-3 uppercase tracking-wide">
                  Cookie e Privacy
                </h3>
                <p className="text-sm text-white-warm/90 leading-relaxed">
                  Utilizziamo cookie essenziali per il funzionamento del sito e cookie di analisi per migliorare 
                  la tua esperienza. Consulta la nostra{' '}
                  <a href="/privacy" className="text-red-intense hover:text-orange-warm underline transition-colors font-semibold">
                    Privacy Policy
                  </a>{' '}
                  per maggiori informazioni.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  onClick={acceptCookies}
                  className="flex-1 bg-gradient-to-r from-gold-primary to-orange-warm text-black-glossy font-montserrat font-bold hover:scale-105 transition-all duration-300 shadow-lg"
                  size="sm"
                >
                  Accetta tutti
                </Button>
                <Button 
                  onClick={rejectCookies}
                  variant="outline"
                  className="flex-1 border-2 border-red-intense text-red-intense hover:bg-red-intense hover:text-white-warm transition-all duration-300"
                  size="sm"
                >
                  Solo essenziali
                </Button>
                <Button 
                  onClick={closeBanner}
                  variant="ghost"
                  size="sm"
                  className="sm:w-auto text-white-warm/60 hover:text-white-warm hover:bg-white-warm/10 transition-all duration-300"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
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
      <Card className="card-psychedelic shadow-retro">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <Cookie className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
            <div className="flex-1 space-y-3">
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Cookie e Privacy
                </h3>
                <p className="text-sm text-muted-foreground">
                  Utilizziamo cookie essenziali per il funzionamento del sito e cookie di analisi per migliorare 
                  la tua esperienza. Consulta la nostra{' '}
                  <a href="/privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </a>{' '}
                  per maggiori informazioni.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-2">
                <Button 
                  onClick={acceptCookies}
                  className="btn-golden flex-1"
                  size="sm"
                >
                  Accetta tutti
                </Button>
                <Button 
                  onClick={rejectCookies}
                  variant="outline"
                  className="flex-1"
                  size="sm"
                >
                  Solo essenziali
                </Button>
                <Button 
                  onClick={closeBanner}
                  variant="ghost"
                  size="sm"
                  className="sm:w-auto"
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
import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';
import { Mail, Gift, Calendar, Bell } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [preferences, setPreferences] = useState({
    new_products: true,
    events: true,
    promotions: true,
    blog: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Mock subscription for now - will be replaced with real Supabase after migration
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Iscrizione completata!",
        description: "Benvenuto nella famiglia Golden Shower. Controlla la tua email per confermare l'iscrizione.",
      });
      setEmail('');
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      toast({
        title: "Errore",
        description: "Errore durante l'iscrizione. Riprova più tardi.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePreferenceChange = (key: string, checked: boolean) => {
    setPreferences(prev => ({ ...prev, [key]: checked }));
  };

  const benefits = [
    {
      icon: <Gift className="h-8 w-8 text-primary" />,
      title: "Offerte Esclusive",
      description: "Sconti riservati agli iscritti e accesso anticipato alle nuove release"
    },
    {
      icon: <Calendar className="h-8 w-8 text-secondary" />,
      title: "Eventi in Anteprima",
      description: "Inviti a degustazioni, eventi speciali e tour del birrificio"
    },
    {
      icon: <Bell className="h-8 w-8 text-accent" />,
      title: "News e Aggiornamenti",
      description: "Le ultime novità dal mondo Golden Shower e il dietro le quinte"
    },
    {
      icon: <Mail className="h-8 w-8 text-primary" />,
      title: "Contenuti Esclusivi",
      description: "Ricette, consigli di abbinamento e storie dal nostro mastro birraio"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center py-16 relative">
          <div className="absolute inset-0 retro-dots opacity-20"></div>
          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-display text-psychedelic mb-6">
              Newsletter Golden Shower
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Unisciti alla nostra comunità e ricevi contenuti esclusivi, 
              offerte speciali e aggiornamenti dal mondo delle birre artigianali
            </p>
          </div>
        </section>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Newsletter Form */}
          <Card className="card-psychedelic">
            <CardContent className="p-8">
              <h2 className="text-3xl font-display text-psychedelic mb-6">
                Iscriviti Ora
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Indirizzo Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="la-tua-email@esempio.com"
                    className="text-lg py-3"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Cosa ti interessa ricevere?</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="new_products"
                        checked={preferences.new_products}
                        onCheckedChange={(checked) => handlePreferenceChange('new_products', checked as boolean)}
                      />
                      <label htmlFor="new_products" className="text-sm cursor-pointer">
                        Nuovi prodotti e birre in edizione limitata
                      </label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="events"
                        checked={preferences.events}
                        onCheckedChange={(checked) => handlePreferenceChange('events', checked as boolean)}
                      />
                      <label htmlFor="events" className="text-sm cursor-pointer">
                        Eventi, degustazioni e tour del birrificio
                      </label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="promotions"
                        checked={preferences.promotions}
                        onCheckedChange={(checked) => handlePreferenceChange('promotions', checked as boolean)}
                      />
                      <label htmlFor="promotions" className="text-sm cursor-pointer">
                        Promozioni e offerte esclusive
                      </label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="blog"
                        checked={preferences.blog}
                        onCheckedChange={(checked) => handlePreferenceChange('blog', checked as boolean)}
                      />
                      <label htmlFor="blog" className="text-sm cursor-pointer">
                        Articoli del blog e contenuti educativi
                      </label>
                    </div>
                  </div>
                </div>

                <div className="text-xs text-muted-foreground bg-muted/50 p-3 rounded-lg">
                  <p>
                    Iscrivendoti accetti di ricevere email promozionali da Golden Shower. 
                    Puoi disiscriverti in qualsiasi momento. Leggi la nostra{' '}
                    <a href="/privacy" className="text-primary hover:underline">
                      informativa sulla privacy
                    </a>
                    .
                  </p>
                </div>

                <Button 
                  type="submit" 
                  className="w-full btn-golden text-lg py-3" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Iscrizione in corso...' : 'Iscriviti alla Newsletter'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Benefits */}
          <div className="space-y-6">
            <Card className="card-psychedelic">
              <CardContent className="p-6">
                <h2 className="text-2xl font-display text-psychedelic mb-6">
                  Perché Iscriversi?
                </h2>
                
                <div className="grid gap-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        {benefit.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          {benefit.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Stats */}
            <Card className="card-psychedelic">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-display text-psychedelic mb-4">
                  Unisciti a 1000+ Craft Beer Lovers
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Fa parte della nostra community di appassionati che ricevono 
                  contenuti esclusivi ogni settimana
                </p>
                <div className="flex justify-center gap-8 text-sm">
                  <div>
                    <div className="text-2xl font-bold text-primary">95%</div>
                    <div className="text-muted-foreground">Tasso di apertura</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-secondary">2x</div>
                    <div className="text-muted-foreground">Email a settimana</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sample Content */}
            <Card className="card-psychedelic">
              <CardContent className="p-6">
                <h3 className="text-xl font-display text-psychedelic mb-4">
                  Cosa Riceverai
                </h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>📧 <strong>Newsletter settimanale</strong> con le ultime novità</p>
                  <p>🍺 <strong>Schede tecniche</strong> delle nuove birre</p>
                  <p>🎯 <strong>Offerte esclusive</strong> riservate agli iscritti</p>
                  <p>📚 <strong>Guide e consigli</strong> per abbinamenti perfetti</p>
                  <p>🎪 <strong>Inviti anticipati</strong> a eventi speciali</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
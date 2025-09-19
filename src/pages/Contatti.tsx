import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

export default function Contatti() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Messaggio inviato!",
        description: "Ti risponderemo entro 24 ore.",
      });
      
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast({
        title: "Errore",
        description: "Errore nell'invio del messaggio. Riprova.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center py-16 relative">
          <div className="absolute inset-0 psychedelic-stripes opacity-10"></div>
          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-display text-psychedelic mb-6">
              Contattaci
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hai domande sui nostri prodotti? Vuoi visitare il birrificio? Siamo qui per te!
            </p>
          </div>
        </section>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="card-psychedelic">
            <CardHeader>
              <CardTitle className="text-2xl font-display text-psychedelic">
                Invia un Messaggio
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nome *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Il tuo nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="la-tua-email@esempio.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Oggetto *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Di cosa vuoi parlarci?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Messaggio *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Scrivi qui il tuo messaggio..."
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full btn-golden" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Invio in corso...' : 'Invia Messaggio'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Address & Info */}
            <Card className="card-psychedelic">
              <CardContent className="p-6">
                <h3 className="text-xl font-display text-psychedelic mb-6">
                  Informazioni di Contatto
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Birrificio Golden Shower</p>
                      <p className="text-muted-foreground">
                        Via della Birra Artigianale, 42<br />
                        00100 Roma (RM), Italia
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium">Telefono</p>
                      <a href="tel:+390612345678" className="text-muted-foreground hover:text-primary">
                        +39 06 1234 5678
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:info@goldenshower.beer" className="text-muted-foreground hover:text-primary">
                        info@goldenshower.beer
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Orari di Apertura</p>
                      <div className="text-muted-foreground text-sm">
                        <p>Lun - Ven: 9:00 - 18:00</p>
                        <p>Sabato: 10:00 - 16:00</p>
                        <p>Domenica: Chiuso</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="card-psychedelic">
              <CardContent className="p-6">
                <h3 className="text-xl font-display text-psychedelic mb-6">
                  Seguici sui Social
                </h3>
                
                <div className="flex gap-4">
                  <a 
                    href="https://instagram.com/goldenshowerbeer" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-primary text-white rounded-lg hover:shadow-golden transition-all"
                  >
                    <Instagram className="h-5 w-5" />
                    Instagram
                  </a>
                  <a 
                    href="https://facebook.com/goldenshowerbeer" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-psychedelic text-white rounded-lg hover:shadow-psychedelic transition-all"
                  >
                    <Facebook className="h-5 w-5" />
                    Facebook
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="card-psychedelic">
              <CardContent className="p-6">
                <h3 className="text-xl font-display text-psychedelic mb-4">
                  Come Raggiungerci
                </h3>
                <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="h-12 w-12 mx-auto mb-2" />
                    <p>Mappa del Birrificio</p>
                    <p className="text-sm">Via della Birra Artigianale, 42</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Visit Section */}
        <section className="py-16 text-center">
          <Card className="card-psychedelic p-8 max-w-2xl mx-auto">
            <h2 className="text-3xl font-display text-psychedelic mb-4">
              Vieni a Trovarci!
            </h2>
            <p className="text-muted-foreground mb-6">
              Visita il nostro birrificio per un tour guidato, degustazioni esclusive 
              e per scoprire da vicino il processo di produzione delle nostre birre artigianali.
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              Prenota in anticipo per assicurarti la disponibilità.
            </p>
            <Button size="lg" className="btn-golden">
              Prenota una Visita
            </Button>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
}
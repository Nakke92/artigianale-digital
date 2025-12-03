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
    <div className="min-h-screen relative bg-gradient-to-b from-black-glossy via-black-glossy/95 to-black-glossy overflow-hidden">
      {/* Liquid Golden Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-primary/20 rounded-full filter blur-3xl animate-pulse-golden"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-orange-warm/15 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-gold-dark/10 rounded-full filter blur-3xl animate-pulse-golden" style={{animationDelay: '2s'}}></div>
      </div>
      
      {/* Animated Liquid Drops */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-20"
            style={{
              left: `${20 + (i * 15)}%`,
              top: `${10 + (i % 3) * 30}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + (i % 3)}s`
            }}
          >
            <div className="w-4 h-6 bg-gold-primary rounded-full transform rotate-45"></div>
          </div>
        ))}
      </div>

      <Header />
      
      <main className="relative z-10 container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center py-16 relative">
          <div className="relative z-10">
            <h1 className="font-anton text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-primary via-orange-warm to-gold-dark mb-6 tracking-wider uppercase">
              CONTATTACI
            </h1>
            <p className="font-lora text-xl text-white-warm max-w-3xl mx-auto leading-relaxed">
              Hai domande sui nostri <span className="text-gold-primary font-bold">prodotti provocanti</span>? 
              Vuoi visitare il <span className="text-orange-warm">birrificio</span>? 
              <span className="text-gold-dark font-bold"> Siamo qui per accendere la tua curiosità!</span>
            </p>
          </div>
        </section>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-black-glossy/60 backdrop-blur-xl border border-gold-primary/30 rounded-2xl shadow-2xl">
            <CardHeader>
              <CardTitle className="font-anton text-2xl text-gold-primary uppercase tracking-wide">
                Invia un Messaggio
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block font-montserrat text-sm font-medium text-white-warm mb-2 uppercase tracking-wide">
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
                      className="bg-black-glossy/50 border-gold-primary/30 text-white-warm placeholder:text-white-warm/50 focus:border-gold-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-montserrat text-sm font-medium text-white-warm mb-2 uppercase tracking-wide">
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
                      className="bg-black-glossy/50 border-gold-primary/30 text-white-warm placeholder:text-white-warm/50 focus:border-gold-primary"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block font-montserrat text-sm font-medium text-white-warm mb-2 uppercase tracking-wide">
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
                    className="bg-black-glossy/50 border-gold-primary/30 text-white-warm placeholder:text-white-warm/50 focus:border-gold-primary"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-montserrat text-sm font-medium text-white-warm mb-2 uppercase tracking-wide">
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
                    className="bg-black-glossy/50 border-gold-primary/30 text-white-warm placeholder:text-white-warm/50 focus:border-gold-primary resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-gold-primary to-orange-warm text-black-glossy font-montserrat font-bold py-3 hover:scale-105 transition-all duration-300 shadow-xl"
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
            <Card className="bg-black-glossy/60 backdrop-blur-xl border border-gold-primary/30 rounded-2xl shadow-2xl">
              <CardContent className="p-6">
                <h3 className="font-anton text-xl text-gold-primary mb-6 uppercase tracking-wide">
                  Informazioni di Contatto
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-gold-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-montserrat font-medium text-white-warm">Birrificio Golden Shower</p>
                      <p className="font-lora text-white-warm/80">
                        Staffoli, Toscana<br />
                        Italia
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-gold-primary flex-shrink-0" />
                    <div>
                      <p className="font-montserrat font-medium text-white-warm">Telefono</p>
                      <div className="space-y-1">
                        <a href="tel:+393480720786" className="font-lora text-white-warm/80 hover:text-gold-primary transition-colors block">
                          +39 348 072 0786 (Nicolò)
                        </a>
                        <a href="tel:+393406489563" className="font-lora text-white-warm/80 hover:text-orange-warm transition-colors block">
                          +39 340 648 9563 (Lorenzo)
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-gold-primary flex-shrink-0" />
                    <div>
                      <p className="font-montserrat font-medium text-white-warm">Email</p>
                      <a href="mailto:info@goldenshower.beer" className="font-lora text-white-warm/80 hover:text-gold-primary transition-colors">
                        info@goldenshower.beer
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-gold-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-montserrat font-medium text-white-warm">Orari di Apertura</p>
                      <div className="font-lora text-white-warm/80 text-sm">
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
            <Card className="bg-black-glossy/60 backdrop-blur-xl border border-gold-primary/30 rounded-2xl shadow-2xl">
              <CardContent className="p-6">
                <h3 className="font-anton text-xl text-gold-primary mb-6 uppercase tracking-wide">
                  Seguici sui Social
                </h3>
                
                <div className="flex gap-4">
                  <a 
                    href="https://instagram.com/goldenshowerbeer" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gold-primary to-orange-warm text-black-glossy rounded-lg hover:scale-105 transition-all duration-300 font-montserrat font-bold"
                  >
                    <Instagram className="h-5 w-5" />
                    Instagram
                  </a>
                  <a 
                    href="https://facebook.com/goldenshowerbeer" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-intense to-orange-warm text-white-warm rounded-lg hover:scale-105 transition-all duration-300 font-montserrat font-bold"
                  >
                    <Facebook className="h-5 w-5" />
                    Facebook
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="bg-black-glossy/60 backdrop-blur-xl border border-gold-primary/30 rounded-2xl shadow-2xl">
              <CardContent className="p-6">
                <h3 className="font-anton text-xl text-gold-primary mb-4 uppercase tracking-wide">
                  Come Raggiungerci
                </h3>
                <div className="w-full h-64 bg-gradient-to-b from-black-glossy/80 to-gold-primary/20 rounded-lg flex items-center justify-center border border-gold-primary/20">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-gold-primary mx-auto mb-2 animate-pulse-golden" />
                    <p className="font-montserrat font-bold text-white-warm">Mappa del Birrificio</p>
                    <p className="font-lora text-sm text-white-warm/80">Staffoli, Toscana</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Visit Section */}
        <section className="py-16 text-center">
          <Card className="bg-gradient-to-r from-gold-primary to-orange-warm p-8 max-w-2xl mx-auto rounded-2xl shadow-2xl">
            <h2 className="font-anton text-3xl font-bold text-black-glossy mb-4 uppercase tracking-wide">
              Vieni a Trovarci!
            </h2>
            <p className="font-lora text-black-glossy/90 mb-6 leading-relaxed">
              Visita il nostro <span className="font-bold">birrificio provocante</span> per un tour guidato, degustazioni esclusive 
              e per scoprire da vicino il processo di produzione delle nostre <span className="font-bold">birre artigianali audaci</span>.
            </p>
            <p className="font-lora text-sm text-black-glossy/80 mb-6">
              Prenota in anticipo per assicurarti la disponibilità.
            </p>
            <Button size="lg" className="bg-black-glossy text-gold-primary hover:bg-black-glossy/90 font-montserrat font-bold py-3 px-8 hover:scale-105 transition-all duration-300">
              Prenota una Visita
            </Button>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
}
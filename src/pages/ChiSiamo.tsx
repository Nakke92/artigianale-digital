import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Beaker, Palette } from 'lucide-react';

export default function ChiSiamo() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section - Provocative */}
        <section className="text-center py-16 relative">
          <div className="absolute inset-0 pattern-golden opacity-20"></div>
          <div className="relative z-10">
            <h1 className="text-5xl md:text-7xl font-oswald font-bold text-golden mb-6">
              Golden Shower Brewery
            </h1>
            <h2 className="text-2xl md:text-3xl font-oswald text-seductive mb-8">
              Dove la Provocazione Incontra l'Artigianalità
            </h2>
            <p className="text-xl font-playfair text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Due amici toscani di <strong className="text-primary">Staffoli</strong>, un piccolo borgo 
              dove il birrificio è nato dalla voglia di <em className="text-accent">rompere le regole</em> 
              e sperimentare con l'irriverenza più autentica.
            </p>
          </div>
        </section>

        {/* Founders Section - The Provocateurs */}
        <section className="py-16">
          <h2 className="text-4xl font-oswald font-bold text-intense text-center mb-12">
            I Protagonisti della Provocazione
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Nicolò - The Alchemist */}
            <Card className="card-provocative hover-lift">
              <CardContent className="p-8 text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-primary to-amber-intense rounded-full mx-auto mb-6 flex items-center justify-center float-seductive">
                  <Beaker className="h-16 w-16 text-black" />
                </div>
                <h3 className="text-3xl font-oswald font-bold text-golden mb-3">Nicolò Boschi</h3>
                <p className="text-lg font-playfair text-accent mb-4">L'Alchimista delle Provocazioni</p>
                
                <div className="text-left space-y-4">
                  <p className="font-playfair text-muted-foreground leading-relaxed">
                    <strong className="text-primary">Laureato in chimica alimentare</strong>, Nicolò è l'anima tecnica del progetto. 
                    La sua esperienza da mastro birraio si fonde con una passione irrefrenabile per la sperimentazione audace.
                  </p>
                  <p className="font-playfair text-muted-foreground leading-relaxed">
                    "Ogni ricetta è una provocazione scientifica" - dice mentre mescola ingredienti che altri considererebbero impossibili. 
                    È lui che trasforma le visioni più maliziose in liquidi che seducono il palato.
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-center space-x-4">
                  <a href="tel:3480720786" className="flex items-center space-x-2 text-primary hover:text-golden transition-colors">
                    <Phone className="h-4 w-4" />
                    <span className="font-playfair">348 072 0786</span>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Lorenzo - The Visionary */}
            <Card className="card-provocative hover-lift">
              <CardContent className="p-8 text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-red-intense to-accent rounded-full mx-auto mb-6 flex items-center justify-center float-seductive" style={{animationDelay: '1s'}}>
                  <Palette className="h-16 w-16 text-white" />
                </div>
                <h3 className="text-3xl font-oswald font-bold text-seductive mb-3">Lorenzo Paolicchi</h3>
                <p className="text-lg font-playfair text-primary mb-4">Il Visionario del Desiderio</p>
                
                <div className="text-left space-y-4">
                  <p className="font-playfair text-muted-foreground leading-relaxed">
                    <strong className="text-accent">Ex designer informatico</strong>, Lorenzo è l'immaginazione selvaggia 
                    che dà vita alle fantasie più audaci. Appassionato di birra e visionario nato, 
                    è colui che immagina il futuro provocatorio del birrificio.
                  </p>
                  <p className="font-playfair text-muted-foreground leading-relaxed">
                    "La birra deve raccontare storie che fanno arrossire" - la sua filosofia è che ogni etichetta, 
                    ogni nome, ogni esperienza deve <em className="text-golden">accendere qualcosa dentro</em> chi la vive.
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-center space-x-4">
                  <a href="tel:3406489563" className="flex items-center space-x-2 text-accent hover:text-seductive transition-colors">
                    <Phone className="h-4 w-4" />
                    <span className="font-playfair">340 648 9563</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-16 bg-gradient-to-r from-transparent via-primary to-transparent h-0.5" />

        {/* Story Section - The Genesis */}
        <section className="py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-oswald font-bold text-golden mb-6">La Genesis della Provocazione</h2>
              <div className="space-y-6 font-playfair text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-primary">Golden Shower</strong> nasce come una provocazione liquida 
                  nel cuore della Toscana, a <em className="text-accent">Staffoli</em>, dove due amici decidono 
                  di trasformare l'irriverenza in arte fermentata.
                </p>
                <p>
                  Ispirata al mondo dello <span className="text-seductive">"squirt" femminile</span> e al desiderio 
                  di creare un'esperienza sensoriale che <strong className="text-golden">accenda tutti i sensi</strong>, 
                  ogni birra è pensata per chi non ha paura di osare.
                </p>
                <p>
                  La nostra filosofia è semplice: <em className="text-intense">"Non la bevi per ubriacarti, 
                  ma per ridere, per condividere, per goderti un getto di loquace freschezza che ti sorprende ad ogni sorso."</em>
                </p>
              </div>
            </div>
            
            <div className="card-provocative p-8 text-center">
              <h3 className="text-3xl font-oswald font-bold text-intense mb-6">La Nostra Filosofia Audace</h3>
              <blockquote className="font-playfair text-xl text-muted-foreground italic leading-relaxed">
                "Creare birre che non seguono le regole, ma scrivono le proprie. 
                Ogni sorso è una <span className="text-golden">provocazione</span>, 
                ogni bottiglia un <span className="text-seductive">invito al piacere</span> 
                senza compromessi."
              </blockquote>
            </div>
          </div>
        </section>

        <Separator className="my-16 bg-gradient-to-r from-transparent via-accent to-transparent h-0.5" />

        {/* Location & Contact */}
        <section className="py-16">
          <h2 className="text-4xl font-oswald font-bold text-seductive text-center mb-12">
            Ci Trovi a Staffoli
          </h2>
          
          <Card className="card-provocative max-w-2xl mx-auto">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="p-6 bg-gradient-to-br from-primary to-accent rounded-full">
                  <MapPin className="h-12 w-12 text-black" />
                </div>
              </div>
              
              <h3 className="text-2xl font-oswald font-bold text-golden mb-4">Birrificio Golden Shower</h3>
              <p className="font-playfair text-lg text-muted-foreground mb-6">
                Nel cuore pulsante di Staffoli, dove la tradizione toscana 
                incontra l'audacia più provocante.
              </p>
              
              <div className="space-y-4 text-left max-w-md mx-auto">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="font-playfair text-muted-foreground">info@goldenshower.beer</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-accent" />
                  <span className="font-playfair text-muted-foreground">348 072 0786 (Nicolò)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-seductive" />
                  <span className="font-playfair text-muted-foreground">340 648 9563 (Lorenzo)</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section - Seductive */}
        <section className="py-16 text-center">
          <Card className="card-provocative p-12 max-w-3xl mx-auto">
            <h2 className="text-4xl font-oswald font-bold text-intense mb-6">
              Pronto per l'Esperienza?
            </h2>
            <p className="text-xl font-playfair text-muted-foreground mb-8 leading-relaxed">
              Scopri le nostre <span className="text-golden">provocazioni liquide</span> e lasciati trasportare 
              in un viaggio sensoriale che <em className="text-seductive">accenderà i tuoi sensi</em> 
              come mai prima d'ora.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/catalogo">
                <Button size="lg" className="btn-golden text-xl px-12 py-4 hover-lift">
                  Esplora le Birre Provocanti
                </Button>
              </Link>
              <Link to="/contatti">
                <Button size="lg" className="btn-seductive text-xl px-12 py-4">
                  Contattaci Subito
                </Button>
              </Link>
            </div>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
}
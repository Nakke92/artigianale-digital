import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';

export default function ChiSiamo() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center py-16 relative">
          <div className="absolute inset-0 retro-dots opacity-20"></div>
          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-display text-psychedelic mb-6">
              Il Birrificio Golden Shower
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Dove la tradizione incontra l'innovazione in un viaggio psichedelico di sapori
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display text-psychedelic mb-6">La Nostra Storia</h2>
              <p className="text-muted-foreground mb-4">
                Nato dalla passione di giovani mastri birrai che hanno deciso di sfidare le convenzioni, 
                Golden Shower rappresenta l'essenza della birra artigianale italiana con un twist psichedelico.
              </p>
              <p className="text-muted-foreground mb-4">
                Fondato nel 2019, il nostro birrificio si ispira alla cultura underground degli anni '70, 
                creando birre uniche che raccontano storie di libertà, creatività e autenticità.
              </p>
              <p className="text-muted-foreground">
                Ogni bottiglia è un'esperienza sensoriale che trasporta in un viaggio di sapori 
                audaci e inaspettati, perfetti per chi non ha paura di osare.
              </p>
            </div>
            <div className="card-psychedelic p-8 text-center">
              <h3 className="text-2xl font-display text-primary mb-4">La Nostra Filosofia</h3>
              <p className="text-muted-foreground">
                "Creare birre che non seguono le regole, ma scrivono le proprie"
              </p>
            </div>
          </div>
        </section>

        <Separator className="my-16" />

        {/* Process Section */}
        <section className="py-16">
          <h2 className="text-3xl font-display text-psychedelic text-center mb-12">
            Il Nostro Processo
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-psychedelic">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">🌾</div>
                <h3 className="text-xl font-display text-primary mb-3">Ingredienti Selezionati</h3>
                <p className="text-muted-foreground">
                  Solo malti e luppoli di prima qualità, selezionati da coltivatori locali 
                  e fornitori di fiducia in Europa e oltre.
                </p>
              </CardContent>
            </Card>

            <Card className="card-psychedelic">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">⚗️</div>
                <h3 className="text-xl font-display text-primary mb-3">Fermentazione Artigianale</h3>
                <p className="text-muted-foreground">
                  Processo di fermentazione controllato con ceppi di lievito selezionati 
                  per ottenere profili di sapore unici e complessi.
                </p>
              </CardContent>
            </Card>

            <Card className="card-psychedelic">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-display text-primary mb-3">Arte Visiva</h3>
                <p className="text-muted-foreground">
                  Ogni etichetta è un'opera d'arte originale che riflette l'anima 
                  psichedelica e ribelle delle nostre creazioni.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-16" />

        {/* Team Section */}
        <section className="py-16">
          <h2 className="text-3xl font-display text-psychedelic text-center mb-12">
            Il Team
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-psychedelic">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl text-white">👨‍🍳</span>
                </div>
                <h3 className="text-xl font-display text-primary mb-2">Marco "The Alchemist"</h3>
                <p className="text-muted-foreground text-sm">Mastro Birraio & Fondatore</p>
                <p className="text-muted-foreground mt-3">
                  L'anima creativa dietro ogni ricetta. Esperto in fermentazione 
                  e appassionato di sperimentazione.
                </p>
              </CardContent>
            </Card>

            <Card className="card-psychedelic">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-gradient-psychedelic rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl text-white">🎨</span>
                </div>
                <h3 className="text-xl font-display text-primary mb-2">Sofia "Visual Shaman"</h3>
                <p className="text-muted-foreground text-sm">Art Director & Co-Fondatrice</p>
                <p className="text-muted-foreground mt-3">
                  Responsabile dell'identità visiva e delle etichette psichedeliche 
                  che rendono uniche le nostre birre.
                </p>
              </CardContent>
            </Card>

            <Card className="card-psychedelic">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-gradient-retro rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl text-white">🔬</span>
                </div>
                <h3 className="text-xl font-display text-primary mb-2">Luca "Quality Guru"</h3>
                <p className="text-muted-foreground text-sm">Controllo Qualità</p>
                <p className="text-muted-foreground mt-3">
                  Garantisce che ogni bottiglia mantenga gli standard di qualità 
                  e il carattere unico delle nostre creazioni.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 text-center">
          <Card className="card-psychedelic p-8 max-w-2xl mx-auto">
            <h2 className="text-3xl font-display text-psychedelic mb-4">
              Unisciti al Viaggio
            </h2>
            <p className="text-muted-foreground mb-6">
              Scopri le nostre creazioni uniche e lasciati trasportare 
              in un'esperienza di gusto senza confini.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/catalogo">
                <Button size="lg" className="btn-golden">
                  Esplora il Catalogo
                </Button>
              </Link>
              <Link to="/contatti">
                <Button size="lg" variant="outline">
                  Contattaci
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
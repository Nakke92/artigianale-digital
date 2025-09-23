import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Beaker, Palette } from 'lucide-react';

export default function ChiSiamo() {
  return (
    <div className="min-h-screen relative bg-gradient-to-b from-black-glossy via-black-glossy/95 to-black-glossy overflow-hidden">
      {/* Liquid Golden Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-oro-primario/20 rounded-full filter blur-3xl animate-pulse-golden"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-arancio-caldo/15 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-oro-scuro/10 rounded-full filter blur-3xl animate-pulse-golden" style={{animationDelay: '2s'}}></div>
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
            <div className="w-4 h-6 bg-oro-primario rounded-full transform rotate-45"></div>
          </div>
        ))}
      </div>

      <Header />
      
      <main className="relative z-10 container mx-auto px-4 py-8">
        {/* Hero Section - Provocative */}
        <section className="text-center py-16 relative">
          <div className="relative z-10">
            <h1 className="font-anton text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-oro-primario via-arancio-caldo to-oro-scuro mb-6 tracking-wider uppercase">
              Golden Shower Brewery
            </h1>
            <h2 className="font-montserrat text-2xl md:text-3xl font-bold text-arancio-caldo mb-8 uppercase tracking-wide">
              Dove la Provocazione Incontra l'Artigianalità
            </h2>
            <p className="font-lora text-xl text-white-warm max-w-4xl mx-auto leading-relaxed">
              Due amici toscani di <strong className="text-oro-primario">Staffoli</strong>, un piccolo borgo 
              dove il birrificio è nato dalla voglia di <em className="text-arancio-caldo">rompere le regole</em> 
              e sperimentare con l'irriverenza più autentica.
            </p>
          </div>
        </section>

        {/* Founders Section - The Provocateurs */}
        <section className="py-16">
          <h2 className="font-anton text-5xl font-bold text-oro-primario text-center mb-12 uppercase tracking-wider">
            Il Team
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Lorenzo - The Visionary - Now First */}
            <Card className="bg-black-glossy/60 backdrop-blur-xl border border-rosso-intenso/50 rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-rosso-intenso to-arancio-caldo rounded-full mx-auto mb-6 flex items-center justify-center animate-float">
                  <Palette className="h-16 w-16 text-bianco-caldo" />
                </div>
                <h3 className="font-anton text-3xl font-bold text-red-intense mb-3 uppercase">Lorenzo Paolicchi</h3>
                <p className="font-montserrat text-lg text-gold-primary mb-4 uppercase tracking-wide">Il MastroBirraio Visionario</p>
                
                <div className="text-left space-y-4 border-2 border-red-intense/30 rounded-lg p-4 bg-black-glossy/40">
                  <p className="white-space-nowrap">
                    Profeta del gusto.<strong className="text-orange-warm"> Creatore di mondi liquidi.</strong><br/> 
                    L’uomo che ha visto il futuro in un bicchiere di birra.<br/> 
                    Forgiato nel mondo del design, porta ora la sua visione nell’universo della birra. Lorenzo immagina il futuro del birrificio. 
                  </p>
                  <p className="font-lora text-white-warm leading-relaxed">
                    "Io immagino, creo e accendo il desiderio. <strong className="text-gold-primary"> Questa è la mia birra."</strong><br/>
                    Le sue idee non sono semplici ricette: <em className="text-pink-transgressive">sono storie, provocazioni,</em> emozioni liquide.
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-center space-x-4">
                  <a href="tel:3406489563" className="flex items-center space-x-2 text-arancio-caldo hover:text-rosso-intenso transition-colors">
                    <Phone className="h-4 w-4" />
                    <span className="font-lora">340 648 9563</span>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Nicolò - The Alchemist - Now Second */}
            <Card className="bg-black-glossy/60 backdrop-blur-xl border border-oro-primario/30 rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-oro-primario to-arancio-caldo rounded-full mx-auto mb-6 flex items-center justify-center animate-float" style={{animationDelay: '1s'}}>
                  <Beaker className="h-16 w-16 text-nero-lucido" />
                </div>
                <h3 className="font-anton text-3xl font-bold text-gold-primary mb-3 uppercase">Nicolò Boschi</h3>
                <p className="font-montserrat text-lg text-orange-warm mb-4 uppercase tracking-wide">Il MastroBirraio Alchimista</p>
                
                <div className="text-left space-y-4 border-2 border-gold-primary/30 rounded-lg p-4 bg-black-glossy/40">
                  <p className="font-lora text-white-warm leading-relaxed">
                    Alchimista del malto. <strong className="text-gold-primary"> Signore del luppolo.</strong><br/>
                    Nicolò è l’artefice che trasforma la visione in realtà.<br/>
                    La sua esperienza da mastro birraio si fonde con una passione irrefrenabile per la sperimentazione.
                  </p>
                  <p className="font-lora text-white-warm leading-relaxed">
                    "Ogni ricetta è una <span className="text-red-intense">sfida scientifica</span>" - Sorride mentre mescola l’impossibile e lo rende <em className="text-pink-transgressive"> irresistibile.</em><br/> 
                    È lui che prende le visioni più folli e le distilla in sensi che conquistano il palato.
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-center space-x-4">
                  <a href="tel:3480720786" className="flex items-center space-x-2 text-oro-primario hover:text-arancio-caldo transition-colors">
                    <Phone className="h-4 w-4" />
                    <span className="font-lora">348 072 0786</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <div className="my-16 h-0.5 bg-gradient-to-r from-transparent via-oro-primario to-transparent"></div>

        {/* Story Section - The Genesis */}
        <section className="py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-anton text-4xl font-bold text-oro-primario mb-6 uppercase tracking-wide">La Genesis della Provocazione</h2>
              <div className="space-y-6 font-lora text-bianco-caldo/90 leading-relaxed">
                <p>
                  <strong className="text-oro-primario">Golden Shower</strong> nasce come una provocazione liquida 
                  nel cuore della Toscana, a <em className="text-arancio-caldo">Staffoli</em>, dove due amici decidono 
                  di trasformare l'irriverenza in arte fermentata.
                </p>
                <p>
                  Ispirata al mondo dello <span className="text-rosso-intenso">"squirt" femminile</span> e al desiderio 
                  di creare un'esperienza sensoriale che <strong className="text-oro-primario">accenda tutti i sensi</strong>, 
                  ogni birra è pensata per chi non ha paura di osare.
                </p>
                <p>
                  La nostra filosofia è semplice: <em className="text-nero-lucido/90">"Non la bevi per ubriacarti, 
                  ma per ridere, per condividere, per goderti un getto di loquace freschezza che ti sorprende ad ogni sorso."</em>
                </p>
              </div>
            </div>
            
            <div className="bg-black-glossy/60 backdrop-blur-xl border border-oro-primario/30 rounded-2xl p-8 text-center shadow-2xl">
              <h3 className="font-anton text-3xl font-bold text-rosso-intenso mb-6 uppercase">La Nostra Filosofia Audace</h3>
              <blockquote className="font-lora text-xl text-bianco-caldo/90 italic leading-relaxed">
                "Creare birre che non seguono le regole, ma scrivono le proprie. 
                Ogni sorso è una <span className="text-oro-primario">provocazione</span>, 
                ogni bottiglia un <span className="text-arancio-caldo">invito al piacere</span> 
                senza compromessi."
              </blockquote>
            </div>
          </div>
        </section>

        <div className="my-16 h-0.5 bg-gradient-to-r from-transparent via-arancio-caldo to-transparent"></div>

        {/* Location & Contact */}
        <section className="py-16">
          <h2 className="font-anton text-4xl font-bold text-nero-lucido text-center mb-12 uppercase tracking-wide">
            Ci Trovi a Staffoli
          </h2>
          
          <Card className="bg-black-glossy/60 backdrop-blur-xl border border-oro-primario/30 rounded-2xl max-w-2xl mx-auto shadow-2xl">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="p-6 bg-gradient-to-br from-oro-primario to-arancio-caldo rounded-full animate-pulse-golden">
                  <MapPin className="h-12 w-12 text-nero-lucido" />
                </div>
              </div>
              
              <h3 className="font-anton text-2xl font-bold text-oro-primario mb-4 uppercase">Birrificio Golden Shower</h3>
              <p className="font-lora text-lg text-nero-lucido/80 mb-6">
                Nel cuore pulsante di Staffoli, dove la tradizione toscana 
                incontra l'audacia più provocante.
              </p>
              
              <div className="space-y-4 text-left max-w-md mx-auto">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-oro-primario" />
                  <span className="font-lora text-nero-lucido/80">info@goldenshower.beer</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-arancio-caldo" />
                  <span className="font-lora text-nero-lucido/80">348 072 0786 (Nicolò)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-rosso-intenso" />
                  <span className="font-lora text-nero-lucido/80">340 648 9563 (Lorenzo)</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>


        {/* CTA Section - Seductive */}
        <section className="py-16 text-center">
          <Card className="bg-gradient-to-r from-oro-primario to-arancio-caldo p-12 max-w-3xl mx-auto rounded-2xl shadow-2xl">
            <h2 className="font-anton text-2xl sm:text-3xl md:text-4xl font-bold text-nero-lucido mb-6 uppercase tracking-wide">
              Pronto per l'Esperienza?
            </h2>
            <p className="font-lora text-xl text-nero-lucido/90 mb-8 leading-relaxed">
              Scopri le nostre <span className="text-nero-lucido font-bold">provocazioni liquide</span> e lasciati trasportare 
              in un viaggio sensoriale che <em className="text-rosso-intenso font-bold">accenderà i tuoi sensi</em> 
              come mai prima d'ora.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/catalogo">
                <Button size="lg" className="bg-nero-lucido text-oro-primario hover:bg-nero-lucido/90 text-xl px-12 py-4 font-montserrat font-bold uppercase tracking-wide hover:scale-105 transition-all duration-300">
                  Esplora le Birre Provocanti
                </Button>
              </Link>
              <Link to="/contatti">
                <Button size="lg" className="bg-rosso-intenso text-bianco-caldo hover:bg-rosso-intenso/90 text-xl px-12 py-4 font-montserrat font-bold uppercase tracking-wide hover:scale-105 transition-all duration-300">
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
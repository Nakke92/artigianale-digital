import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Zap, Users } from 'lucide-react';
import goldenShowerLabel from '@/assets/golden-shower-label.jpeg';

export const HomeHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient">
      {/* Background Pattern - Golden waves and splashes */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,215,0,0.6),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(255,140,0,0.4),transparent_50%)]" />
        <div className="absolute inset-0 bg-[conic-gradient(from_45deg,transparent_40%,rgba(255,215,0,0.3)_45%,rgba(255,215,0,0.3)_55%,transparent_60%)]" />
      </div>
      
      {/* Animated Liquid Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-gold-primary/30 rounded-full blur-2xl animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-60 h-60 bg-orange-warm/25 rounded-full blur-2xl animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-pink-transgressive/20 rounded-full blur-xl animate-pulse delay-500" />
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-red-intense/25 rounded-full blur-xl animate-pulse delay-700" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="space-y-8 animate-fade-in">
          {/* Main Headline */}
          <h1 className="font-anton text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-wider leading-tight">
            <span className="block text-black-glossy drop-shadow-2xl">Golden Shower</span>
            <span className="block text-lg md:text-xl lg:text-2xl font-montserrat font-semibold normal-case mt-6 text-gold-dark">
              Birra Artigianale per Palati Audaci
            </span>
          </h1>

          {/* Provocative Description */}
          <p className="font-lora text-lg md:text-xl lg:text-2xl text-black-glossy max-w-4xl mx-auto leading-relaxed font-medium">
            Una provocazione liquida che nasce dal gioco ironico sul piacere. 
            <span className="text-red-intense font-semibold"> Golden Shower</span> è ispirata al mondo dello "squirt" femminile 
            e al desiderio di creare un'esperienza sensoriale unica che sorprende ad ogni sorso.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
            <Button 
              size="lg" 
              className="font-montserrat text-lg px-10 py-6 uppercase tracking-wide bg-gold-primary hover:bg-gold-dark text-black-glossy shadow-2xl hover:shadow-gold-primary/50 transition-all duration-300 hover:scale-105 border-2 border-gold-dark"
              onClick={() => window.location.href = '/catalogo'}
            >
              Scopri le Birre
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="font-montserrat text-lg px-10 py-6 uppercase tracking-wide border-3 border-gold-primary text-gold-dark hover:bg-gold-primary hover:text-black-glossy shadow-2xl hover:shadow-gold-primary/50 transition-all duration-300 hover:scale-105 bg-white-warm/80"
              onClick={() => window.location.href = '/carrello'}
            >
              Compra Ora
            </Button>
          </div>

            {/* Provocative Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center group hover-glow cursor-pointer">
                <div className="text-4xl font-oswald font-bold text-golden">6.2%</div>
                <div className="text-sm text-muted-foreground font-playfair">ABV Medio</div>
              </div>
              <div className="text-center group hover-glow cursor-pointer">
                <div className="text-4xl font-oswald font-bold text-intense">100%</div>
                <div className="text-sm text-muted-foreground font-playfair">Irriverente</div>
              </div>
              <div className="text-center group hover-glow cursor-pointer">
                <div className="text-4xl font-oswald font-bold text-seductive">3+</div>
                <div className="text-sm text-muted-foreground font-playfair">Provocazioni</div>
              </div>
            </div>
          </div>

          {/* Hero Visual - Seductive */}
          <div className="relative">
            <div className="card-provocative p-8 bg-gradient-to-br from-card to-black-glossy">
              <div className="relative">
                <img
                  src={goldenShowerLabel}
                  alt="Golden Shower IPA - La provocazione liquida"
                  className="w-full max-w-md mx-auto rounded-lg shadow-golden float-seductive hover-seduce"
                />
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-primary to-accent text-black px-6 py-3 rounded-full text-sm font-oswald font-bold pulse-intense">
                  Audace!
                </div>
              </div>
            </div>

            {/* Floating Seductive Elements */}
            <div className="absolute -top-8 -left-8 w-28 h-28 bg-gradient-to-br from-primary to-amber-intense rounded-full opacity-70 float-seductive" style={{animationDelay: '1s'}}></div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-red-intense to-accent rounded-full opacity-60 float-seductive" style={{animationDelay: '2.5s'}}></div>
            <div className="absolute top-1/2 -left-6 w-16 h-16 bg-gradient-to-br from-orange-fire to-primary rounded-full opacity-50 float-seductive" style={{animationDelay: '4s'}}></div>
          </div>
        </div>
    </section>
  );
};

export const HomeFeatures = () => {
  const features = [
    {
      icon: <Zap className="h-10 w-10 text-golden" />,
      title: "Getto di Freschezza",
      description: "Non la bevi per ubriacarti, ma per ridere, per condividere, per goderti un getto di loquace freschezza che ti sorprende ad ogni sorso.",
      gradient: "from-primary to-amber-intense"
    },
    {
      icon: <Heart className="h-10 w-10 text-seductive" />,
      title: "Sensorialità Provocante", 
      description: "Ogni birra è un'esperienza che accende i sensi, progettata per chi non ha paura di osare e vuole vivere il piacere senza compromessi.",
      gradient: "from-red-intense to-accent"
    },
    {
      icon: <Users className="h-10 w-10 text-intense" />,
      title: "Community Audace",
      description: "Unisciti alla famiglia di spiriti liberi che celebrano l'autenticità, la provocazione e l'arte di vivere intensamente ogni momento.",
      gradient: "from-orange-fire to-primary"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background relative">
      <div className="absolute inset-0 pattern-golden opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-oswald font-bold text-intense mb-6">
            Perché Golden Shower?
          </h2>
          <p className="text-xl font-playfair text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Non siamo solo un birrificio, siamo una <em className="text-golden">filosofia audace</em> che celebra 
            l'individualità, la provocazione e la passione per l'<span className="text-seductive">autentico piacere</span> 
            senza compromessi.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="card-provocative text-center group hover-lift transition-all duration-500">
              <CardContent className="p-8">
                <div className="flex justify-center mb-6">
                  <div className={`p-6 bg-gradient-to-br ${feature.gradient} rounded-full group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-golden`}>
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-oswald font-semibold text-foreground mb-4 group-hover:text-golden transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground font-playfair leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Provocative CTA */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 card-provocative">
            <h3 className="text-3xl font-oswald font-bold text-golden mb-4">
              Pronto per la Provocazione?
            </h3>
            <p className="text-lg font-playfair text-muted-foreground mb-6">
              Lasciati sedurre dalle nostre creazioni irriverenti
            </p>
            <Link to="/catalogo">
              <Button size="lg" className="btn-golden text-lg px-10 py-4 hover-lift">
                Compra Ora
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
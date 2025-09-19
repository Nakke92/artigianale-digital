import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Zap, Users } from 'lucide-react';
import goldenShowerLabel from '@/assets/golden-shower-label.jpeg';

export const HomeHero = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-background via-black-glossy to-background">
      {/* Seductive Background Pattern */}
      <div className="absolute inset-0 pattern-golden opacity-20"></div>
      <div className="absolute inset-0 pattern-seductive opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content - Provocative */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl font-oswald font-bold text-golden leading-tight">
                Golden Shower
              </h1>
              <h2 className="text-2xl md:text-3xl font-oswald font-medium text-seductive">
                Birra Artigianale per Palati Audaci
              </h2>
              <div className="font-playfair text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
                <p className="mb-4">
                  <strong className="text-primary">Golden Shower</strong> nasce come provocazione liquida e gioco ironico sul piacere. 
                </p>
                <p>
                  Una birra ispirata al mondo dell'<em className="text-accent">esperienza sensoriale femminile</em> 
                  e al desiderio di creare un'esperienza di gusto <span className="text-golden">unica e irresistibile</span>.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/catalogo">
                <Button size="lg" className="btn-golden text-lg px-8 py-4 hover-lift">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Scopri le Birre
                </Button>
              </Link>
              <Link to="/chi-siamo">
                <Button size="lg" className="btn-seductive text-lg px-8 py-4">
                  <Heart className="mr-2 h-5 w-5" />
                  La Nostra Storia
                </Button>
              </Link>
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
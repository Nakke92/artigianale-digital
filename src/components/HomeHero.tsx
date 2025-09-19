import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ShoppingCart, Sparkles, Award, Users } from 'lucide-react';
import goldenShowerLabel from '@/assets/golden-shower-label.jpeg';

export const HomeHero = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 retro-dots opacity-30"></div>
      <div className="absolute inset-0 psychedelic-stripes opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-display text-psychedelic leading-tight">
                Birre Artigianali
                <br />
                <span className="text-golden">Psichedeliche</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Scopri il mondo di Golden Shower: birre artigianali uniche che 
                trasformano ogni sorso in un viaggio sensoriale indimenticabile.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/catalogo">
                <Button size="lg" className="btn-golden text-lg px-8 py-4">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Esplora il Catalogo
                </Button>
              </Link>
              <Link to="/chi-siamo">
                <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                  La Nostra Storia
                </Button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">6.2%</div>
                <div className="text-sm text-muted-foreground">ABV Medio</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">100%</div>
                <div className="text-sm text-muted-foreground">Artigianale</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">5+</div>
                <div className="text-sm text-muted-foreground">Varietà</div>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative">
            <div className="card-psychedelic p-8 bg-gradient-psychedelic">
              <div className="relative">
                <img
                  src={goldenShowerLabel}
                  alt="Golden Shower IPA"
                  className="w-full max-w-md mx-auto rounded-lg shadow-golden float-animation"
                />
                <div className="absolute -top-4 -right-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-bold pulse-golden">
                  Novità!
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-primary rounded-full opacity-70 float-animation" style={{animationDelay: '1s'}}></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-psychedelic rounded-full opacity-60 float-animation" style={{animationDelay: '2s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const HomeFeatures = () => {
  const features = [
    {
      icon: <Sparkles className="h-8 w-8 text-primary" />,
      title: "Sapori Unici",
      description: "Combinazioni audaci di ingredienti selezionati per esperienze di gusto irripetibili"
    },
    {
      icon: <Award className="h-8 w-8 text-secondary" />,
      title: "Qualità Premiata", 
      description: "Birre artigianali prodotte seguendo i più alti standard qualitativi"
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Community",
      description: "Unisciti alla famiglia di appassionati che condividono l'amore per l'artigianalità"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display text-psychedelic mb-6">
            Perché Golden Shower?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Non siamo solo un birrificio, siamo una filosofia che celebra 
            l'individualità e la passione per l'autentico.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="card-psychedelic text-center group hover:shadow-retro transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-background rounded-full group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-display text-foreground mb-4 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
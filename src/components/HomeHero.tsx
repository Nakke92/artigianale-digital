import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Sparkles, Zap, Heart, Flame } from 'lucide-react';

export const HomeHero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black-glossy">
      {/* Animated Background with Golden Liquid Effects */}
      <div className="absolute inset-0">
        {/* Primary liquid blob */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-gold-primary via-orange-warm to-red-intense rounded-full blur-3xl opacity-30 animate-pulse" 
             style={{animationDuration: '4s'}} />
        
        {/* Secondary flowing elements */}
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-tl from-pink-transgressive via-gold-primary to-orange-warm rounded-full blur-2xl opacity-25 animate-pulse" 
             style={{animationDuration: '6s', animationDelay: '1s'}} />
        
        {/* Tertiary accent */}
        <div className="absolute bottom-1/3 left-1/2 w-64 h-64 bg-gradient-to-r from-red-intense via-orange-warm to-gold-primary rounded-full blur-xl opacity-40 animate-pulse" 
             style={{animationDuration: '3s', animationDelay: '2s'}} />

        {/* Dynamic grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.1)_1px,transparent_1px)] bg-[length:50px_50px] opacity-20" />
        
        {/* Flowing gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gold-primary/5 to-red-intense/10" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-6xl mx-auto">
          
          {/* Provocative Badge */}
          <div className="inline-flex items-center gap-2 bg-red-intense/20 backdrop-blur-sm border border-red-intense/30 rounded-full px-6 py-3 mb-8">
            <Flame className="w-5 h-5 text-red-intense animate-pulse" />
            <span className="font-marker text-red-intense text-sm uppercase tracking-wide">
              Provocazione Liquida
            </span>
            <Sparkles className="w-4 h-4 text-gold-primary" />
          </div>

          {/* Main Title - Massive and Bold */}
          <h1 className="font-anton text-7xl md:text-9xl lg:text-[12rem] leading-none uppercase text-transparent bg-clip-text bg-gradient-to-br from-gold-primary via-orange-warm to-red-intense mb-6 tracking-tight">
            Golden<br />Shower
          </h1>

          {/* Subtitle with Attitude */}
          <div className="mb-12">
            <p className="font-montserrat text-xl md:text-3xl text-white-warm/90 font-semibold uppercase tracking-wide mb-4">
              Birra Artigianale per Palati Audaci
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-gold-primary to-red-intense mx-auto rounded-full" />
          </div>

          {/* Provocative Description */}
          <p className="font-lora text-lg md:text-xl text-white-warm/80 max-w-3xl mx-auto leading-relaxed mb-12">
            Non la bevi per ubriacarti, ma per 
            <span className="text-gold-primary font-semibold"> ridere</span>, per 
            <span className="text-orange-warm font-semibold"> condividere</span>, per goderti un 
            <span className="text-red-intense font-semibold"> getto di loquace freschezza</span> che ti sorprende ad ogni sorso.
          </p>

          {/* CTA Buttons - Futuristic Style */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="group relative overflow-hidden bg-gradient-to-r from-gold-primary via-orange-warm to-gold-primary bg-[length:200%_100%] hover:bg-[position:100%_0] text-black-glossy font-montserrat text-lg px-12 py-6 uppercase tracking-wide transition-all duration-500 hover:scale-105 shadow-2xl hover:shadow-gold-primary/50"
              onClick={() => window.location.href = '/catalogo'}
            >
              <span className="relative z-10 flex items-center gap-3">
                Scopri le Birre
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="group relative overflow-hidden border-2 border-gold-primary bg-transparent hover:bg-gold-primary text-gold-primary hover:text-black-glossy font-montserrat text-lg px-12 py-6 uppercase tracking-wide transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              onClick={() => window.location.href = '/carrello'}
            >
              <span className="flex items-center gap-3">
                Compra Ora
                <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </span>
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            <Card className="bg-white-warm/10 backdrop-blur-sm border border-gold-primary/20 hover:bg-white-warm/20 transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-anton text-gold-primary mb-2 group-hover:scale-110 transition-transform">
                  3+
                </div>
                <div className="text-sm font-montserrat text-white-warm/70 uppercase tracking-wide">
                  Birre Audaci
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white-warm/10 backdrop-blur-sm border border-red-intense/20 hover:bg-white-warm/20 transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-anton text-red-intense mb-2 group-hover:scale-110 transition-transform">
                  100%
                </div>
                <div className="text-sm font-montserrat text-white-warm/70 uppercase tracking-wide">
                  Irriverente
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white-warm/10 backdrop-blur-sm border border-orange-warm/20 hover:bg-white-warm/20 transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-anton text-orange-warm mb-2 group-hover:scale-110 transition-transform">
                  ∞
                </div>
                <div className="text-sm font-montserrat text-white-warm/70 uppercase tracking-wide">
                  Provocazione
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gold-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export const HomeFeatures = () => {
  const features = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Getto di Freschezza",
      description: "Un'esplosione di sapore che ti cattura dal primo sorso, lasciandoti con la voglia di condividere l'esperienza.",
      gradient: "from-gold-primary to-orange-warm"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Sensorialità Provocante", 
      description: "Ogni birra è progettata per accendere i sensi e sfidare le convenzioni del gusto tradizionale.",
      gradient: "from-red-intense to-pink-transgressive"
    },
    {
      icon: <Flame className="h-8 w-8" />,
      title: "Audacia Liquida",
      description: "Per chi non ha paura di osare e vuole vivere il piacere senza compromessi o falsi pudori.",
      gradient: "from-orange-warm to-red-intense"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black-glossy via-white-warm/5 to-black-glossy relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gold-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-intense/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gold-primary/10 backdrop-blur-sm border border-gold-primary/20 rounded-full px-6 py-3 mb-8">
            <Sparkles className="w-5 h-5 text-gold-primary" />
            <span className="font-marker text-gold-primary text-sm uppercase">
              Perché Scegliere Golden Shower
            </span>
          </div>
          
          <h2 className="font-anton text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-gold-primary via-orange-warm to-red-intense uppercase mb-8">
            L'Esperienza
          </h2>
          
          <p className="font-lora text-xl text-white-warm/80 max-w-3xl mx-auto leading-relaxed">
            Non siamo solo un birrificio, siamo una <span className="text-gold-primary font-semibold">filosofia audace</span> che celebra 
            l'individualità e la passione per l'<span className="text-red-intense font-semibold">autentico piacere</span>.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="group bg-white-warm/5 backdrop-blur-sm border border-gold-primary/20 hover:border-gold-primary/40 transition-all duration-500 hover:scale-105 hover:bg-white-warm/10">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  <div className={`p-6 bg-gradient-to-br ${feature.gradient} rounded-full group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl`}>
                    <div className="text-black-glossy">
                      {feature.icon}
                    </div>
                  </div>
                </div>
                <h3 className="font-anton text-2xl text-white-warm mb-4 group-hover:text-gold-primary transition-colors uppercase">
                  {feature.title}
                </h3>
                <p className="font-lora text-white-warm/70 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <Card className="inline-block bg-gradient-to-br from-gold-primary/10 to-red-intense/10 backdrop-blur-sm border border-gold-primary/30 p-12 hover:scale-105 transition-all duration-300">
            <CardContent className="p-0">
              <h3 className="font-anton text-4xl text-transparent bg-clip-text bg-gradient-to-r from-gold-primary to-red-intense mb-6 uppercase">
                Pronto per la Provocazione?
              </h3>
              <p className="font-lora text-lg text-white-warm/80 mb-8 max-w-md">
                Lasciati sedurre dalle nostre creazioni irriverenti e scopri un mondo di sapori audaci.
              </p>
              <Button 
                size="lg" 
                className="group relative overflow-hidden bg-gradient-to-r from-red-intense via-orange-warm to-gold-primary bg-[length:200%_100%] hover:bg-[position:100%_0] text-black-glossy font-montserrat text-lg px-12 py-6 uppercase tracking-wide transition-all duration-500 hover:scale-105 shadow-2xl"
                onClick={() => window.location.href = '/catalogo'}
              >
                <span className="flex items-center gap-3">
                  Esplora il Catalogo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
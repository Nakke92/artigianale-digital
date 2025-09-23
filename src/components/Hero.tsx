import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import goldenShowerLabel from '@/assets/golden-shower-label.jpeg';

export const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-primary">
      {/* Background Pattern */}
      <div className="absolute inset-0 retro-dots opacity-30" />
      <div className="absolute inset-0 psychedelic-stripes opacity-20" />
      
      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-primary-glow/20 backdrop-blur-sm rounded-full px-4 py-2 border border-primary-glow/30">
                <Sparkles className="h-4 w-4 text-primary-foreground" />
                <span className="text-sm font-medium text-primary-foreground">
                  Birra Artigianale Premium
                </span>
              </div>
              
             <h1 className="text-hero-mobile md:text-hero-md lg:text-hero-lg font-display font-bold text-primary-foreground leading-tight">
                  Golden
              <span className="block text-psychedelic animate-psychedelic-flow">
                  Shower
              </span>
              <span className="text-2xl md:text-3xl lg:text-4xl block mt-2">
                  IPA
                </span>
              </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl">
              Un'esperienza psichedelica di sapori unici. Birra IPA artigianale 
              dal gusto inconfondibile con note di luppolo americano e sentori tropicali.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/catalogo">
                <Button size="lg" className="btn-psychedelic text-lg px-8 py-6 rounded-2xl">
                  Scopri il Catalogo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              
              <Link to="/chi-siamo">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 text-lg px-8 py-6 rounded-2xl backdrop-blur-sm"
                >
                  La Nostra Storia
                </Button>
              </Link>
            </div>
            
            {/* Features */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-foreground">6.5%</div>
                <div className="text-sm text-primary-foreground/80">ABV</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-foreground">65</div>
                <div className="text-sm text-primary-foreground/80">IBU</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-foreground">★ 4.8</div>
                <div className="text-sm text-primary-foreground/80">Rating</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Floating Background Elements */}
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-psychedelic-blue/30 rounded-full blur-xl animate-float" />
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-secondary/30 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
              <div className="absolute top-1/2 -left-20 w-16 h-16 bg-accent/30 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }} />
              
              {/* Main Image Container */}
              <div className="relative z-10 pulse-golden">
                <div className="w-80 h-96 md:w-96 md:h-[28rem] rounded-3xl overflow-hidden shadow-psychedelic border-4 border-primary-glow/50 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <img
                    src={goldenShowerLabel}
                    alt="Golden Shower IPA Label"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-psychedelic-cyan rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-12 md:h-16 fill-background"
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
          ></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
          ></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>
    </section>
  );
};
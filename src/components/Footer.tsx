import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Footer = () => {
  return (
    <footer className="bg-black-glossy text-white-warm border-t border-gold-primary/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="relative">
              <h3 className="font-anton text-2xl text-transparent bg-clip-text bg-gradient-to-r from-gold-primary to-orange-warm uppercase tracking-wide">
                Golden Shower
              </h3>
              <div className="w-16 h-0.5 bg-gradient-to-r from-gold-primary to-transparent mt-2" />
            </div>
            <p className="font-lora text-white-warm/70 leading-relaxed">
              Birra artigianale provocatoria dal cuore della Toscana. 
              Per palati audaci che non temono di sperimentare.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="hover:text-gold-primary hover:bg-gold-primary/10 border border-gold-primary/20">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-gold-primary hover:bg-gold-primary/10 border border-gold-primary/20">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-gold-primary hover:bg-gold-primary/10 border border-gold-primary/20">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-6">
            <h4 className="font-montserrat font-semibold uppercase tracking-wide text-gold-primary">Navigazione</h4>
            <nav className="flex flex-col space-y-3">
              <a href="/catalogo" className="font-lora text-white-warm/70 hover:text-gold-primary transition-colors hover:translate-x-1 duration-200">
                Catalogo
              </a>
              <a href="/chi-siamo" className="font-lora text-white-warm/70 hover:text-gold-primary transition-colors hover:translate-x-1 duration-200">
                Chi Siamo
              </a>
              <a href="/blog" className="font-lora text-white-warm/70 hover:text-gold-primary transition-colors hover:translate-x-1 duration-200">
                Blog
              </a>
              <a href="/contatti" className="font-lora text-white-warm/70 hover:text-gold-primary transition-colors hover:translate-x-1 duration-200">
                Contatti
              </a>
            </nav>
          </div>

          {/* Legal Links */}
          <div className="space-y-6">
            <h4 className="font-montserrat font-semibold uppercase tracking-wide text-gold-primary">Informazioni</h4>
            <nav className="flex flex-col space-y-3">
              <a href="/privacy" className="font-lora text-white-warm/70 hover:text-gold-primary transition-colors hover:translate-x-1 duration-200">
                Privacy Policy
              </a>
              <a href="/terms" className="font-lora text-white-warm/70 hover:text-gold-primary transition-colors hover:translate-x-1 duration-200">
                Termini di Servizio
              </a>
              <a href="/faq" className="font-lora text-white-warm/70 hover:text-gold-primary transition-colors hover:translate-x-1 duration-200">
                FAQ
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-montserrat font-semibold uppercase tracking-wide text-gold-primary">Contatti</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gold-primary" />
                <span className="font-lora text-white-warm/70">info@goldenshower.beer</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gold-primary" />
                <div className="flex flex-col space-y-1">
                  <span className="font-lora text-orange-warm font-medium">+39 348 072 0786</span>
                  <span className="font-lora text-orange-warm font-medium">+39 340 648 9563</span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-gold-primary" />
                <span className="font-lora text-white-warm/70">Staffoli, Toscana</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gold-primary/20 pt-8 mt-12 flex flex-col md:flex-row justify-between items-center">
          <p className="font-lora text-sm text-white-warm/50 mb-4 md:mb-0">
            © 2024 Golden Shower Brewery. Tutti i diritti riservati.
          </p>
          <div className="flex items-center space-x-6 text-sm">
            <span className="text-red-intense font-semibold font-marker text-lg">⚠️ Bevi Responsabilmente</span>
            <span className="text-gold-primary font-montserrat">Vietato ai minori di 18 anni</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
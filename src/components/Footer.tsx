import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-background to-muted/30 border-t border-border/40">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="text-2xl font-display text-psychedelic">
              Golden Shower
            </div>
            <p className="text-muted-foreground">
              Birra artigianale premium dal 2020. Un'esperienza psichedelica 
              di sapori unici per i veri intenditori.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Link Rapidi</h3>
            <div className="space-y-2">
              <Link to="/catalogo" className="block text-muted-foreground hover:text-primary transition-colors">
                Catalogo
              </Link>
              <Link to="/chi-siamo" className="block text-muted-foreground hover:text-primary transition-colors">
                Chi Siamo
              </Link>
              <Link to="/contatti" className="block text-muted-foreground hover:text-primary transition-colors">
                Contatti
              </Link>
              <Link to="/carrello" className="block text-muted-foreground hover:text-primary transition-colors">
                Carrello
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Informazioni Legali</h3>
            <div className="space-y-2">
              <Link to="/privacy" className="block text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/termini" className="block text-muted-foreground hover:text-primary transition-colors">
                Termini e Condizioni
              </Link>
              <Link to="/cookies" className="block text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </Link>
              <Link to="/spedizioni" className="block text-muted-foreground hover:text-primary transition-colors">
                Spedizioni e Resi
              </Link>
            </div>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contatti</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span className="text-sm">info@goldenshower.beer</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+39 02 1234 5678</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Milano, Italia</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-medium text-foreground">Newsletter</h4>
              <div className="flex space-x-2">
                <Input 
                  placeholder="La tua email" 
                  className="flex-1"
                />
                <Button className="btn-golden">
                  Iscriviti
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Ricevi offerte esclusive e novità sui nostri prodotti.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/40 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 Golden Shower Brewery. Tutti i diritti riservati.
            </div>
            <div className="text-sm text-muted-foreground">
              Bevi responsabilmente. Vietato ai minori di 18 anni.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
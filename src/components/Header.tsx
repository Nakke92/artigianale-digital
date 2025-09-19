import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ShoppingCart, Menu, User, Heart } from 'lucide-react';

export const Header = () => {
  const [cartItemsCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Catalogo', href: '/catalogo' },
    { name: 'Chi Siamo', href: '/chi-siamo' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contatti', href: '/contatti' },
  ];

  return (
    <header className="fixed top-0 z-50 w-full bg-black-glossy/80 backdrop-blur-xl border-b border-gold-primary/20">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 hover:scale-105 transition-transform cursor-pointer" onClick={() => window.location.href = '/'}>
          <div className="relative">
            <h1 className="font-anton text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-primary to-orange-warm uppercase tracking-wide">
              Golden Shower
            </h1>
            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-gold-primary to-transparent" />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="group relative font-montserrat text-sm uppercase tracking-wide text-white-warm hover:text-gold-primary transition-colors py-2">
              {item.name}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-primary group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            className="hidden sm:flex font-montserrat uppercase tracking-wide text-white-warm hover:text-gold-primary hover:bg-gold-primary/10 transition-all"
            onClick={() => window.location.href = '/auth'}
          >
            Login
          </Button>
          
          <Button
            className="group relative overflow-hidden bg-gradient-to-r from-gold-primary to-orange-warm text-black-glossy font-montserrat uppercase tracking-wide px-6 py-2 hover:scale-105 transition-all duration-300"
            onClick={() => window.location.href = '/carrello'}
          >
            <span className="relative z-10">Carrello ({cartItemsCount})</span>
          </Button>
          
          {/* Mobile Menu */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="md:hidden text-white-warm hover:text-gold-primary">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-black-glossy border-gold-primary/20">
              <div className="flex flex-col space-y-4 mt-6">
                <div className="text-lg font-anton text-gold-primary uppercase">
                  Golden Shower
                </div>
                
                <div className="flex flex-col space-y-3">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-white-warm hover:text-gold-primary transition-colors py-2 font-montserrat uppercase tracking-wide"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>

                <div className="border-t border-gold-primary/20 pt-4 space-y-2">
                  <Button variant="outline" className="w-full justify-start border-gold-primary/30 text-white-warm hover:bg-gold-primary hover:text-black-glossy" onClick={() => window.location.href = '/auth'}>
                    <User className="h-4 w-4 mr-2" />
                    Account
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-gold-primary/30 text-white-warm hover:bg-gold-primary hover:text-black-glossy" onClick={() => window.location.href = '/carrello'}>
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Carrello ({cartItemsCount})
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
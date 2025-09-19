import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ShoppingCart, Menu, User, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [cartItemsCount] = useState(0); // This will be managed by cart context later

  const navigation = [
    { name: 'Catalogo', href: '/catalogo' },
    { name: 'Chi Siamo', href: '/chi-siamo' },
    { name: 'Contatti', href: '/contatti' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-black-glossy/95 backdrop-blur supports-[backdrop-filter]:bg-black-glossy/80 border-b border-gold-dark">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <h1 className="font-anton text-2xl font-bold text-gold-primary uppercase tracking-wide">
            Golden Shower
          </h1>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/catalogo" className="font-montserrat text-sm uppercase tracking-wide text-white-warm hover:text-gold-primary transition-colors">
            Catalogo
          </Link>
          <Link to="/chi-siamo" className="font-montserrat text-sm uppercase tracking-wide text-white-warm hover:text-gold-primary transition-colors">
            Chi Siamo
          </Link>
          <Link to="/blog" className="font-montserrat text-sm uppercase tracking-wide text-white-warm hover:text-gold-primary transition-colors">
            Blog
          </Link>
          <Link to="/contatti" className="font-montserrat text-sm uppercase tracking-wide text-white-warm hover:text-gold-primary transition-colors">
            Contatti
          </Link>
        </nav>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            {/* Wishlist */}
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Heart className="h-5 w-5" />
            </Button>

            {/* Account */}
            <Link to="/auth">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </Link>

            {/* Cart */}
            <Link to="/carrello">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartItemsCount > 0 && (
                  <Badge 
                    variant="destructive" 
                    className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
                  >
                    {cartItemsCount}
                  </Badge>
                )}
              </Button>
            </Link>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-6">
                  <Link to="/" className="text-lg font-display text-psychedelic">
                    Golden Shower
                  </Link>
                  
                  <div className="flex flex-col space-y-3">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="text-foreground/80 hover:text-foreground transition-colors py-2"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>

                  <div className="border-t pt-4 space-y-2">
                    <Link to="/auth">
                      <Button variant="outline" className="w-full justify-start">
                        <User className="h-4 w-4 mr-2" />
                        Account
                      </Button>
                    </Link>
                    <Link to="/carrello">
                      <Button variant="outline" className="w-full justify-start">
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Carrello ({cartItemsCount})
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
    </header>
  );
};
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { LoadingPlaceholder } from '@/components/LoadingPlaceholder';
import { ShoppingCart, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  featured_image?: string;
  abv: number;
  ibu: number;
  style: string;
  is_active: boolean;
}

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

export const ProductCard = ({ 
  product, 
  onAddToCart
}: ProductCardProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleAddToCart = async () => {
    setIsLoading(true);
    try {
      await onAddToCart?.(product);
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <Card className="group bg-black-glossy/80 backdrop-blur-xl border-2 border-gold-primary/40 hover:border-gold-primary/70 transition-all duration-500 hover:scale-105 overflow-hidden shadow-2xl hover:shadow-gold-primary/30">
      <div className="relative overflow-hidden">
        {/* Product Image with loading placeholder */}
        <div className="aspect-[4/5] overflow-hidden bg-gradient-to-br from-gold-primary/20 to-red-intense/20 relative">
          {!imageLoaded && (
            <LoadingPlaceholder className="absolute inset-0" aspectRatio="4/5" />
          )}
          <img
            src={product.featured_image || product.image_url}
            alt={product.name}
            className={`w-full h-full object-cover group-hover:scale-105 transition-all duration-500 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent) {
                parent.innerHTML = '<div class="w-full h-full flex items-center justify-center"><div class="text-center"><div class="text-4xl mb-2">🍺</div><p class="text-gold-primary text-sm font-anton uppercase">Golden Shower</p></div></div>';
              }
              setImageLoaded(true);
            }}
            loading="lazy"
            decoding="async"
          />
        </div>
        
        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-gradient-to-t from-black-glossy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4">
            <Link to={(() => {
              // Link to blog articles based on product name
              if (product.name.includes('Golden Shower')) {
                return '/blog/segreto-fermentazione-perfetta';
              } else if (product.name.includes('Red Head')) {
                return '/blog/red-head-nascita-ribelle';
              } else if (product.name.includes('Bella Negra')) {
                return '/blog/bella-negra-mistero';
              }
              return `/prodotto/${product.id}`;
            })()} className="w-full">
              <Button 
                size="sm" 
                variant="outline"
                className="w-full bg-black-glossy/50 backdrop-blur-sm border-gold-primary/50 text-gold-primary hover:bg-gold-primary hover:text-black-glossy transition-all duration-300"
              >
                <Eye className="h-4 w-4 mr-1" />
                Dettagli
              </Button>
            </Link>
          </div>
        </div>

        {/* Status Badge */}
        {!product.is_active && (
          <Badge className="absolute top-2 left-2 bg-red-intense text-white-warm border border-red-intense">
            Esaurito
          </Badge>
        )}
        
        {/* Style Badge */}
        <Badge className="absolute top-2 right-2 bg-orange-warm/90 text-black-glossy font-montserrat uppercase tracking-wide border border-orange-warm">
          {product.style}
        </Badge>
      </div>

      <CardContent className="p-6 space-y-4 bg-black-glossy/60 border-t border-gold-primary/30">
        {/* Product Name with Custom Colors */}
        <div className="border border-gold-primary/20 rounded-lg p-4 bg-gold-primary/5">
          <h3 className={`font-anton text-xl group-hover:text-orange-warm transition-colors uppercase tracking-wide ${
            product.name.includes('Golden Shower') ? 'text-[#FFD700]' :
            product.name.includes('Red Head') ? 'text-[#FF0000]' :
            product.name.includes('Bella Negra') ? 'text-[#8B4513]' :
            'text-gold-primary'
          }`}>
            {product.name}
          </h3>
          <p className="text-sm text-white-warm/90 mt-2 font-lora leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Product Specs with Golden Borders */}
        <div className="flex justify-between items-center text-sm bg-gold-primary/10 rounded-lg p-3 border border-gold-primary/30">
          <div className="flex gap-6">
            <span className="text-orange-warm font-semibold">
              ABV: <strong className="text-gold-primary">{product.abv}%</strong>
            </span>
            <span className="text-red-intense font-semibold">
              IBU: <strong className="text-pink-transgressive">{product.ibu}</strong>
            </span>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between border-t border-gold-primary/30 pt-4">
          <div className="text-3xl font-anton text-gold-primary">
            €{product.price.toFixed(2)}
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0 bg-black-glossy/60">
        <Button 
          onClick={handleAddToCart}
          disabled={!product.is_active || isLoading}
          className="w-full bg-gradient-to-r from-gold-primary to-orange-warm text-black-glossy font-montserrat font-bold py-3 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-gold-primary/50 disabled:opacity-50 disabled:hover:scale-100"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          {isLoading ? 'Aggiungendo...' : 'Aggiungi al Carrello'}
        </Button>
      </CardFooter>
    </Card>
  );
};
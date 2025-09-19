import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Heart, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  abv: number;
  ibu: number;
  style: string;
  is_active: boolean;
}

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  onToggleWishlist?: (product: Product) => void;
  isInWishlist?: boolean;
}

export const ProductCard = ({ 
  product, 
  onAddToCart, 
  onToggleWishlist, 
  isInWishlist = false 
}: ProductCardProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleAddToCart = async () => {
    setIsLoading(true);
    try {
      await onAddToCart?.(product);
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggleWishlist = () => {
    onToggleWishlist?.(product);
  };

  return (
    <Card className="card-psychedelic group overflow-hidden hover:shadow-retro transition-all duration-300 hover:-translate-y-1">
      <div className="relative overflow-hidden">
        {/* Product Image */}
        <div className="aspect-[4/5] overflow-hidden">
          <img
            src={product.image_url}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        
        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4 flex gap-2">
            <Link to={`/prodotto/${product.id}`} className="flex-1">
              <Button 
                size="sm" 
                variant="secondary"
                className="w-full bg-primary-foreground/20 backdrop-blur-sm border-primary-foreground/30"
              >
                <Eye className="h-4 w-4 mr-1" />
                Dettagli
              </Button>
            </Link>
            <Button 
              size="sm"
              variant="ghost"
              onClick={handleToggleWishlist}
              className={`bg-primary-foreground/20 backdrop-blur-sm ${
                isInWishlist ? 'text-red-500' : 'text-primary-foreground'
              }`}
            >
              <Heart className={`h-4 w-4 ${isInWishlist ? 'fill-current' : ''}`} />
            </Button>
          </div>
        </div>

        {/* Status Badge */}
        {!product.is_active && (
          <Badge variant="destructive" className="absolute top-2 left-2">
            Esaurito
          </Badge>
        )}
        
        {/* Style Badge */}
        <Badge variant="secondary" className="absolute top-2 right-2 bg-primary/80 text-primary-foreground">
          {product.style}
        </Badge>
      </div>

      <CardContent className="p-4 space-y-3">
        {/* Product Name */}
        <div>
          <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
            {product.description}
          </p>
        </div>

        {/* Product Specs */}
        <div className="flex justify-between items-center text-sm">
          <div className="flex gap-4">
            <span className="text-muted-foreground">
              <strong className="text-foreground">{product.abv}%</strong> ABV
            </span>
            <span className="text-muted-foreground">
              <strong className="text-foreground">{product.ibu}</strong> IBU
            </span>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">
            €{product.price.toFixed(2)}
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button 
          onClick={handleAddToCart}
          disabled={!product.is_active || isLoading}
          className="w-full btn-golden"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          {isLoading ? 'Aggiungendo...' : 'Aggiungi al Carrello'}
        </Button>
      </CardFooter>
    </Card>
  );
};
import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const Catalogo = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [filterStyle, setFilterStyle] = useState('all');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('is_active', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setProducts(data || []);
    } catch (error) {
      console.error('Error fetching products:', error);
      toast.error('Errore nel caricamento dei prodotti');
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = (product: any) => {
    // This will be implemented with cart context
    toast.success(`${product.name} aggiunto al carrello!`);
  };

  const handleToggleWishlist = (product: any) => {
    // This will be implemented with wishlist context
    toast.success(`${product.name} aggiunto ai preferiti!`);
  };

  const filteredProducts = products
    .filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(product => 
      filterStyle === 'all' || product.style.toLowerCase().includes(filterStyle.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'abv':
          return b.abv - a.abv;
        case 'ibu':
          return b.ibu - a.ibu;
        default:
          return a.name.localeCompare(b.name);
      }
    });

  const uniqueStyles = [...new Set(products.map(p => p.style))];

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-muted-foreground">Caricamento prodotti...</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-psychedelic mb-4">
            Catalogo Birre
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Scopri la nostra selezione di birre artigianali premium. 
            Ogni birra è una storia, ogni sorso un'esperienza unica.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="bg-card rounded-2xl p-6 mb-8 shadow-golden">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Cerca birre..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Style Filter */}
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <Select value={filterStyle} onValueChange={setFilterStyle}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Stile birra" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tutti gli stili</SelectItem>
                  {uniqueStyles.map(style => (
                    <SelectItem key={style} value={style}>
                      {style}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Ordina per" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Nome A-Z</SelectItem>
                  <SelectItem value="price-low">Prezzo: Basso</SelectItem>
                  <SelectItem value="price-high">Prezzo: Alto</SelectItem>
                  <SelectItem value="abv">ABV più alto</SelectItem>
                  <SelectItem value="ibu">IBU più alto</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Active Filters */}
          <div className="flex flex-wrap gap-2 mt-4">
            {searchTerm && (
              <Badge variant="secondary" className="gap-1">
                Ricerca: {searchTerm}
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-auto p-0 text-muted-foreground hover:text-foreground"
                  onClick={() => setSearchTerm('')}
                >
                  ×
                </Button>
              </Badge>
            )}
            {filterStyle !== 'all' && (
              <Badge variant="secondary" className="gap-1">
                Stile: {filterStyle}
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-auto p-0 text-muted-foreground hover:text-foreground"
                  onClick={() => setFilterStyle('all')}
                >
                  ×
                </Button>
              </Badge>
            )}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
                onToggleWishlist={handleToggleWishlist}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🍺</div>
            <h3 className="text-xl font-semibold mb-2">Nessuna birra trovata</h3>
            <p className="text-muted-foreground mb-4">
              Prova a modificare i filtri o termini di ricerca
            </p>
            <Button 
              onClick={() => {
                setSearchTerm('');
                setFilterStyle('all');
                setSortBy('name');
              }}
              className="btn-golden"
            >
              Ripristina filtri
            </Button>
          </div>
        )}

        {/* Results Count */}
        <div className="text-center mt-8 text-muted-foreground">
          {filteredProducts.length > 0 && (
            <p>
              Mostrati {filteredProducts.length} di {products.length} prodotti
            </p>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Catalogo;
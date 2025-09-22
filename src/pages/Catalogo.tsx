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
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

const Catalogo = () => {
  const { addItem } = useCart();
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
    addItem(product);
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
    <div className="min-h-screen relative bg-gradient-to-b from-black-glossy via-black-glossy/90 to-bianco-caldo overflow-hidden">
      {/* Liquid Golden Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-oro-primario/20 rounded-full filter blur-3xl animate-pulse-golden"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-arancio-caldo/15 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-oro-scuro/10 rounded-full filter blur-3xl animate-pulse-golden" style={{animationDelay: '2s'}}></div>
      </div>
      
      {/* Animated Liquid Drops */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-20"
            style={{
              left: `${20 + (i * 15)}%`,
              top: `${10 + (i % 3) * 30}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + (i % 3)}s`
            }}
          >
            <div className="w-4 h-6 bg-oro-primario rounded-full transform rotate-45"></div>
          </div>
        ))}
      </div>

      <Header />
      
      <main className="relative z-10 container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12 pt-12">
          <h1 className="font-anton text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-oro-primario via-arancio-caldo to-oro-scuro mb-6 tracking-wider uppercase">
            CATALOGO
          </h1>
          <p className="font-lora text-xl text-bianco-caldo/90 max-w-3xl mx-auto leading-relaxed">
            Scopri le nostre <span className="text-oro-primario font-bold">provocazioni liquide</span> premium. 
            Ogni birra è una <span className="text-arancio-caldo">storia audace</span>, ogni sorso un'esperienza che 
            <span className="text-oro-scuro"> accende i sensi</span>.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="bg-black-glossy/60 backdrop-blur-xl border border-oro-primario/30 rounded-2xl p-6 mb-8 shadow-2xl">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-oro-primario" />
              <Input
                placeholder="Cerca le tue provocazioni..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-black-glossy/50 border-oro-primario/30 text-bianco-caldo placeholder:text-bianco-caldo/50 focus:border-oro-primario"
              />
            </div>

            {/* Style Filter */}
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-oro-primario" />
              <Select value={filterStyle} onValueChange={setFilterStyle}>
                <SelectTrigger className="w-[180px] bg-black-glossy/50 border-oro-primario/30 text-bianco-caldo">
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
              <SlidersHorizontal className="h-4 w-4 text-oro-primario" />
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px] bg-black-glossy/50 border-oro-primario/30 text-bianco-caldo">
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
              <Badge className="gap-1 bg-oro-primario/20 text-oro-primario border-oro-primario/30">
                Ricerca: {searchTerm}
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-auto p-0 text-oro-primario hover:text-arancio-caldo"
                  onClick={() => setSearchTerm('')}
                >
                  ×
                </Button>
              </Badge>
            )}
            {filterStyle !== 'all' && (
              <Badge className="gap-1 bg-arancio-caldo/20 text-arancio-caldo border-arancio-caldo/30">
                Stile: {filterStyle}
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-auto p-0 text-arancio-caldo hover:text-oro-primario"
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
            <h3 className="font-anton text-2xl text-gold-primary mb-2 uppercase">Nessuna Provocazione Trovata</h3>
            <p className="font-lora text-white-warm/80 mb-4">
              Prova a modificare i filtri o termini di ricerca per trovare la tua birra perfetta
            </p>
            <Button 
              onClick={() => {
                setSearchTerm('');
                setFilterStyle('all');
                setSortBy('name');
              }}
              className="bg-gradient-to-r from-gold-primary to-orange-warm text-black-glossy font-montserrat font-bold px-8 py-3 rounded-full hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              Ripristina filtri
            </Button>
          </div>
        )}

        {/* Results Count */}
        <div className="text-center mt-8">
          {filteredProducts.length > 0 && (
            <p className="font-lora text-white-warm/80">
              Mostrate <span className="text-gold-primary font-bold">{filteredProducts.length}</span> di <span className="text-gold-primary font-bold">{products.length}</span> provocazioni
            </p>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Catalogo;
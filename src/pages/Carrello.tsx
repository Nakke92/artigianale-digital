import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ShoppingCart, Minus, Plus, Trash2, Tag, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';

const Carrello = () => {
  const { items: cartItems, updateQuantity, removeItem } = useCart();
  const { user, profile } = useAuth();
  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleUpdateQuantity = (productId: string, newQuantity: number) => {
    updateQuantity(productId, newQuantity);
  };

  const handleRemoveItem = (productId: string) => {
    removeItem(productId);
  };

  const applyPromoCode = async () => {
    if (!promoCode.trim()) {
      toast.error('Inserisci un codice promozionale');
      return;
    }

    try {
      const { data, error } = await supabase
        .from('promo_codes')
        .select('*')
        .eq('code', promoCode.toUpperCase())
        .eq('is_active', true)
        .single();

      if (error || !data) {
        toast.error('Codice promozionale non valido');
        return;
      }

      // Check if expired
      if (data.expires_at && new Date(data.expires_at) < new Date()) {
        toast.error('Codice promozionale scaduto');
        return;
      }

      // Check usage limit
      if (data.usage_limit && data.used_count >= data.usage_limit) {
        toast.error('Codice promozionale esaurito');
        return;
      }

      // Check minimum order amount
      const subtotal = calculateSubtotal();
      if (data.min_order_amount && subtotal < data.min_order_amount) {
        toast.error(`Ordine minimo per questo codice: €${data.min_order_amount}`);
        return;
      }

      setAppliedPromo(data);
      toast.success('Codice promozionale applicato!');
    } catch (error) {
      toast.error('Errore durante l\'applicazione del codice');
    }
  };

  const removePromoCode = () => {
    setAppliedPromo(null);
    setPromoCode('');
    toast.success('Codice promozionale rimosso');
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  const calculateDiscount = () => {
    if (!appliedPromo) return 0;
    
    const subtotal = calculateSubtotal();
    if (appliedPromo.discount_type === 'percentage') {
      return subtotal * (appliedPromo.discount_value / 100);
    } else {
      return Math.min(appliedPromo.discount_value, subtotal);
    }
  };

  const calculateShipping = () => {
    const subtotal = calculateSubtotal();
    return subtotal >= 50 ? 0 : 5; // Free shipping over €50
  };

  const calculateTotal = () => {
    return calculateSubtotal() - calculateDiscount() + calculateShipping();
  };

  const handleCheckout = async () => {
    if (cartItems.length === 0) {
      toast.error('Il carrello è vuoto');
      return;
    }

    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: {
          items: cartItems,
          customerInfo: {
            email: user?.email || '',
            name: profile ? `${profile.first_name} ${profile.last_name}` : '',
            phone: profile?.phone || ''
          },
          promoCode: appliedPromo?.code
        }
      });

      if (error) throw error;

      if (data.url) {
        window.open(data.url, '_blank');
      } else {
        toast.error('Errore durante la creazione del checkout');
      }
    } catch (error: any) {
      console.error('Checkout error:', error);
      toast.error('Errore durante il checkout');
    } finally {
      setIsLoading(false);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="text-6xl mb-6">🛒</div>
            <h1 className="text-3xl font-display font-bold mb-4">Il tuo carrello è vuoto</h1>
            <p className="text-muted-foreground mb-8">
              Scopri la nostra selezione di birre artigianali premium
            </p>
            <Link to="/catalogo">
              <Button className="btn-golden">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Vai al Catalogo
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-display font-bold text-psychedelic mb-8">
            Carrello ({cartItems.length} {cartItems.length === 1 ? 'prodotto' : 'prodotti'})
          </h1>

          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <Card key={item.id} className="card-psychedelic">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={item.image_url}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-foreground">{item.name}</h3>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-lg font-bold text-primary">
                            €{item.price.toFixed(2)}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row items-end sm:items-center gap-2">
                        <div className="flex items-center gap-1 sm:gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.product_id, item.quantity - 1)}
                            className="h-7 w-7 sm:h-8 sm:w-8"
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-6 sm:w-8 text-center font-medium text-sm sm:text-base">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.product_id, item.quantity + 1)}
                            className="h-7 w-7 sm:h-8 sm:w-8"
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>

                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeItem(item.product_id)}
                          className="text-destructive hover:text-destructive h-7 w-7 sm:h-8 sm:w-8"
                        >
                          <Trash2 className="h-3 w-3 sm:h-4 sm:w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <div className="space-y-6">
              
              {/* Promo Code */}
              <Card className="card-psychedelic">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Tag className="h-5 w-5" />
                    Codice Promozionale
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {!appliedPromo ? (
                    <div className="flex gap-2">
                      <Input
                        placeholder="Inserisci codice"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                      />
                      <Button onClick={applyPromoCode} variant="outline">
                        Applica
                      </Button>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between">
                      <div>
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          {appliedPromo.code}
                        </Badge>
                        <p className="text-sm text-muted-foreground mt-1">
                          {appliedPromo.description}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={removePromoCode}
                        className="text-destructive"
                      >
                        Rimuovi
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Order Summary */}
              <Card className="card-psychedelic">
                <CardHeader>
                  <CardTitle>Riepilogo Ordine</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Subtotale</span>
                      <span>€{calculateSubtotal().toFixed(2)}</span>
                    </div>
                    
                    {appliedPromo && (
                      <div className="flex justify-between text-green-600">
                        <span>Sconto ({appliedPromo.code})</span>
                        <span>-€{calculateDiscount().toFixed(2)}</span>
                      </div>
                    )}
                    
                    <div className="flex justify-between">
                      <span>Spedizione</span>
                      <span>
                        {calculateShipping() === 0 ? (
                          <Badge variant="secondary" className="bg-green-100 text-green-800">
                            Gratuita
                          </Badge>
                        ) : (
                          `€${calculateShipping().toFixed(2)}`
                        )}
                      </span>
                    </div>
                    
                    {calculateShipping() > 0 && (
                      <p className="text-xs text-muted-foreground">
                        Spedizione gratuita per ordini da €50
                      </p>
                    )}
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between text-lg font-bold">
                    <span>Totale</span>
                    <span>€{calculateTotal().toFixed(2)}</span>
                  </div>
                  
                  <Button 
                    onClick={handleCheckout}
                    disabled={isLoading}
                    className="w-full btn-golden text-lg py-6"
                  >
                    <CreditCard className="h-5 w-5 mr-2" />
                    {isLoading ? 'Reindirizzamento...' : 'Procedi al Pagamento'}
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    Pagamenti sicuri con Stripe. Accettiamo carte di credito, Apple Pay e Google Pay.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Carrello;
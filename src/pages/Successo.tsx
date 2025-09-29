import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CheckCircle, ShoppingBag, ArrowRight, Package } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

const Successo = () => {
  const [searchParams] = useSearchParams();
  const { user } = useAuth();
  const { clearCart } = useCart();
  const [orderData, setOrderData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    const processPaymentSuccess = async () => {
      if (!sessionId) {
        setLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase.functions.invoke('process-payment-success', {
          body: { session_id: sessionId }
        });

        if (error) {
          console.error('Payment processing failed');
          toast.error('Errore nel recupero dei dati dell\'ordine');
        } else if (data) {
          setOrderData(data);
          // Clear cart on successful order
          clearCart();
          toast.success('Ordine confermato con successo!');
        }
      } catch (error) {
        console.error('Payment processing failed');
        toast.error('Errore nel recupero dei dati dell\'ordine');
      } finally {
        setLoading(false);
      }
    };

    processPaymentSuccess();
  }, [sessionId, clearCart]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        <Header />
        <main className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gold-primary mx-auto mb-8"></div>
            <h1 className="text-2xl font-anton text-gold-primary">
              Elaborazione del tuo ordine...
            </h1>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!sessionId) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        <Header />
        <main className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="text-6xl mb-6">❌</div>
            <h1 className="text-3xl font-anton text-red-intense mb-4">
              Sessione non trovata
            </h1>
            <p className="text-white-warm/80 mb-8">
              Non siamo riusciti a trovare i dettagli del tuo ordine.
            </p>
            <Link to="/catalogo">
              <Button className="bg-gradient-to-r from-gold-primary to-orange-warm text-black-glossy font-bold">
                <ShoppingBag className="h-4 w-4 mr-2" />
                Torna al Catalogo
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          
          {/* Success Header */}
          <div className="text-center mb-12">
            <div className="mb-6">
              <CheckCircle className="h-20 w-20 text-green-500 mx-auto" />
            </div>
            <h1 className="text-4xl font-anton text-gold-primary mb-4 uppercase tracking-wider">
              Ordine Confermato!
            </h1>
            <p className="text-xl text-white-warm/90 max-w-2xl mx-auto">
              Grazie per il tuo acquisto. Il tuo ordine è stato ricevuto e sarà elaborato a breve.
            </p>
          </div>

          {/* Order Details */}
          {orderData && (
            <Card className="bg-black-glossy/80 backdrop-blur-xl border-2 border-gold-primary/40 mb-8">
              <CardHeader>
                <CardTitle className="text-2xl font-anton text-gold-primary flex items-center gap-2">
                  <Package className="h-6 w-6" />
                  Dettagli Ordine
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                
                {/* Order ID */}
                <div className="border border-gold-primary/20 rounded-lg p-4 bg-gold-primary/5">
                  <div className="flex justify-between items-center">
                    <span className="text-white-warm font-semibold">Numero Ordine:</span>
                    <Badge className="bg-gold-primary/20 text-gold-primary border border-gold-primary/30">
                      #{orderData.order_id}
                    </Badge>
                  </div>
                </div>

                {/* Order Summary */}
                <div className="border border-gold-primary/20 rounded-lg p-4 bg-gold-primary/5">
                  <h3 className="text-lg font-anton text-gold-primary mb-4">Riepilogo</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-white-warm">Subtotale:</span>
                      <span className="text-gold-primary font-bold">€{orderData.order?.subtotal?.toFixed(2)}</span>
                    </div>
                    {orderData.order?.shipping_amount > 0 && (
                      <div className="flex justify-between">
                        <span className="text-white-warm">Spedizione:</span>
                        <span className="text-gold-primary font-bold">€{orderData.order.shipping_amount.toFixed(2)}</span>
                      </div>
                    )}
                    <div className="border-t border-gold-primary/30 pt-2 mt-2">
                      <div className="flex justify-between text-lg">
                        <span className="text-gold-primary font-bold">Totale:</span>
                        <span className="text-gold-primary font-bold">€{orderData.order?.total_amount?.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Next Steps */}
                <div className="border border-gold-primary/20 rounded-lg p-4 bg-gold-primary/5">
                  <h3 className="text-lg font-anton text-gold-primary mb-4">Prossimi Passi</h3>
                  <div className="space-y-3 text-white-warm/90">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gold-primary rounded-full flex items-center justify-center text-black-glossy font-bold text-sm">1</div>
                      <p>Riceverai una email di conferma con tutti i dettagli dell'ordine</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gold-primary rounded-full flex items-center justify-center text-black-glossy font-bold text-sm">2</div>
                      <p>Il tuo ordine sarà preparato e spedito entro 1-2 giorni lavorativi</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gold-primary rounded-full flex items-center justify-center text-black-glossy font-bold text-sm">3</div>
                      <p>Riceverai il codice di tracking per seguire la spedizione</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/catalogo">
              <Button className="bg-gradient-to-r from-gold-primary to-orange-warm text-black-glossy font-bold w-full sm:w-auto">
                <ShoppingBag className="h-4 w-4 mr-2" />
                Continua gli Acquisti
              </Button>
            </Link>
            {user && (
              <Link to="/profilo">
                <Button variant="outline" className="border-gold-primary text-gold-primary hover:bg-gold-primary hover:text-black-glossy w-full sm:w-auto">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Visualizza i Tuoi Ordini
                </Button>
              </Link>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Successo;
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const TestPage = () => {
  const { items, totalItems, subtotal, addItem, clearCart } = useCart();
  const { user, profile } = useAuth();
  const navigate = useNavigate();

  const testProduct = {
    id: 'ae1f38ab-3526-4558-94b0-3963f3d3bd90', // Golden Shower IPA
    name: 'Golden Shower IPA',
    description: 'Test product',
    price: 8.50,
    image_url: '/assets/golden-shower-new-2.png',
    style: 'IPA',
    is_active: true
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">Test E-commerce System</h1>
        
        {/* User Status */}
        <Card>
          <CardHeader>
            <CardTitle>Stato Utente</CardTitle>
          </CardHeader>
          <CardContent>
            {user ? (
              <div>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Nome:</strong> {profile?.first_name} {profile?.last_name}</p>
                <p><strong>Telefono:</strong> {profile?.phone || 'Non specificato'}</p>
                <p><strong>Indirizzo:</strong> {profile?.address || 'Non specificato'}</p>
              </div>
            ) : (
              <p>Utente non autenticato</p>
            )}
          </CardContent>
        </Card>

        {/* Cart Status */}
        <Card>
          <CardHeader>
            <CardTitle>Stato Carrello</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p><strong>Articoli totali:</strong> {totalItems}</p>
                <p><strong>Subtotale:</strong> €{subtotal.toFixed(2)}</p>
              </div>
              
              <div className="space-y-2">
                <Button onClick={() => addItem(testProduct)} className="mr-2">
                  Aggiungi Prodotto Test
                </Button>
                <Button onClick={clearCart} variant="destructive">
                  Svuota Carrello
                </Button>
              </div>

              {items.length > 0 && (
                <div>
                  <h4 className="font-semibold mb-2">Articoli nel carrello:</h4>
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between items-center p-2 border rounded">
                      <span>{item.name} (x{item.quantity})</span>
                      <span>€{(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Quick Links */}
        <Card>
          <CardHeader>
            <CardTitle>Link Rapidi</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex gap-2 flex-wrap">
              <Button onClick={() => navigate('/auth')}>
                Vai a Login/Registrazione
              </Button>
              <Button onClick={() => navigate('/catalogo')}>
                Vai al Catalogo
              </Button>
              <Button onClick={() => navigate('/carrello')}>
                Vai al Carrello
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TestPage;
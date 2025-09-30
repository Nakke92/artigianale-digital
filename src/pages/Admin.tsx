import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import { 
  Package, 
  ShoppingCart, 
  Users, 
  TrendingUp, 
  Plus,
  Edit,
  Download,
  DollarSign
} from 'lucide-react';

interface AdminStats {
  totalOrders: number;
  totalRevenue: number;
  totalProducts: number;
  totalCustomers: number;
}

export default function Admin() {
  const navigate = useNavigate();
  const [stats, setStats] = useState<AdminStats>({
    totalOrders: 0,
    totalRevenue: 0,
    totalProducts: 0,
    totalCustomers: 0
  });
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuthorization();
    if (isAuthorized) {
      fetchStats();
    }
  }, [isAuthorized]);

  const checkAuthorization = async () => {
    // Simple auth check - in production, implement proper role-based access
    const { data: { user } } = await supabase.auth.getUser();
    
    if (user && user.email === 'admin@goldenshower.beer') {
      setIsAuthorized(true);
    } else {
      setIsAuthorized(false);
    }
    setLoading(false);
  };

  const fetchStats = async () => {
    try {
      // Fetch orders count and revenue
      const { data: orders, error: ordersError } = await supabase
        .from('orders')
        .select('total_amount');
      
      if (ordersError) throw ordersError;

      // Fetch products count
      const { data: products, error: productsError } = await supabase
        .from('products')
        .select('id', { count: 'exact' });
      
      if (productsError) throw productsError;

      // Fetch customers count
      const { data: profiles, error: profilesError } = await supabase
        .from('profiles')
        .select('id', { count: 'exact' });
      
      if (profilesError) throw profilesError;

      const revenue = orders?.reduce((sum, order) => sum + Number(order.total_amount), 0) || 0;

      setStats({
        totalOrders: orders?.length || 0,
        totalRevenue: revenue,
        totalProducts: products?.length || 0,
        totalCustomers: profiles?.length || 0
      });
    } catch (error) {
      console.error('Stats loading failed');
      toast({
        title: "Errore",
        description: "Errore nel caricamento delle statistiche.",
        variant: "destructive"
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-muted-foreground">Verifica autorizzazioni...</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="flex justify-center items-center min-h-[400px]">
            <Card className="card-psychedelic p-8 max-w-md text-center">
              <h2 className="text-2xl font-display text-psychedelic mb-4">
                Accesso Negato
              </h2>
              <p className="text-muted-foreground mb-6">
                Non hai i permessi necessari per accedere a questa area.
              </p>
              <Button onClick={() => navigate('/auth')}>
                Accedi
              </Button>
            </Card>
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
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-display text-psychedelic mb-2">
              Dashboard Admin
            </h1>
            <p className="text-muted-foreground">
              Gestisci il tuo e-commerce Golden Shower
            </p>
          </div>
          <Button className="btn-golden">
            <Download className="mr-2 h-4 w-4" />
            Esporta Dati
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="card-psychedelic">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Ordini Totali</p>
                  <p className="text-2xl font-bold text-foreground">{stats.totalOrders}</p>
                </div>
                <ShoppingCart className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="card-psychedelic">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Fatturato</p>
                  <p className="text-2xl font-bold text-foreground">€{stats.totalRevenue.toFixed(2)}</p>
                </div>
                <DollarSign className="h-8 w-8 text-secondary" />
              </div>
            </CardContent>
          </Card>

          <Card className="card-psychedelic">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Prodotti</p>
                  <p className="text-2xl font-bold text-foreground">{stats.totalProducts}</p>
                </div>
                <Package className="h-8 w-8 text-accent" />
              </div>
            </CardContent>
          </Card>

          <Card className="card-psychedelic">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Clienti</p>
                  <p className="text-2xl font-bold text-foreground">{stats.totalCustomers}</p>
                </div>
                <Users className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="orders" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="orders">Ordini</TabsTrigger>
            <TabsTrigger value="products">Prodotti</TabsTrigger>
            <TabsTrigger value="customers">Clienti</TabsTrigger>
            <TabsTrigger value="settings">Impostazioni</TabsTrigger>
          </TabsList>

          <TabsContent value="orders">
            <Card className="card-psychedelic">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-2xl font-display text-psychedelic">
                    Gestione Ordini
                  </CardTitle>
                  <Button size="sm">
                    <TrendingUp className="mr-2 h-4 w-4" />
                    Report Vendite
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <ShoppingCart className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    Gestione Ordini in Sviluppo
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Questa sezione permetterà di visualizzare e gestire tutti gli ordini.
                  </p>
                  <Badge variant="secondary">Coming Soon</Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="products">
            <Card className="card-psychedelic">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-2xl font-display text-psychedelic">
                    Gestione Prodotti
                  </CardTitle>
                  <Button className="btn-golden">
                    <Plus className="mr-2 h-4 w-4" />
                    Nuovo Prodotto
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    Catalogo Prodotti
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Qui potrai aggiungere, modificare e gestire l'inventario dei prodotti.
                  </p>
                  <Badge variant="secondary">In Sviluppo</Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="customers">
            <Card className="card-psychedelic">
              <CardHeader>
                <CardTitle className="text-2xl font-display text-psychedelic">
                  Gestione Clienti
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    Database Clienti
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Visualizza e gestisci le informazioni dei tuoi clienti.
                  </p>
                  <Badge variant="secondary">Pianificato</Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card className="card-psychedelic">
              <CardHeader>
                <CardTitle className="text-2xl font-display text-psychedelic">
                  Impostazioni Generali
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Informazioni Azienda</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Nome Azienda</label>
                      <Input defaultValue="Golden Shower Brewery S.r.l." />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input defaultValue="info@goldenshower.beer" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Telefono</label>
                      <Input defaultValue="+39 06 1234 5678" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">P.IVA</label>
                      <Input defaultValue="12345678901" />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Indirizzo</h3>
                  <div className="space-y-4">
                    <Textarea 
                      defaultValue="Via della Birra Artigianale, 42&#10;00100 Roma (RM)&#10;Italia"
                      rows={3}
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button className="btn-golden">
                    Salva Modifiche
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
}
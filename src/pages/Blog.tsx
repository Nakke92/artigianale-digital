import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { supabase } from '@/integrations/supabase/client';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Search } from 'lucide-react';

// ✅ Import immagini
import goldenShower from '@/assets/golden-shower-new.jpeg';
import redHead from '@/assets/red-head-new.jpeg';
import bellaNegra from '@/assets/bella-negra-new.png';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featured_image: string;
  published_at: string;
  created_at: string;
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Mock data for now - will be replaced with real Supabase data after migration
    const mockPosts: BlogPost[] = [
      {
        id: '1',
        title: 'Golden Shower IPA – La Leggenda',
        slug: 'segreto-fermentazione-perfetta',
        excerpt: 'Scopri i trucchi del mestiere che rendono uniche le nostre birre artigianali.',
        featured_image: goldenShower,
        published_at: '2024-03-15',
        created_at: '2024-03-15'
      },
      {
        id: '2',
        title: 'Red Head: La Nascita di una Ribelle',
        slug: 'red-head-nascita-ribelle',
        excerpt: 'La storia dietro la creazione della nostra Red Ale dal carattere indomito.',
        featured_image: redHead,
        published_at: '2024-03-10',
        created_at: '2024-03-10'
      },
      {
        id: '3',
        title: 'Bella Negra: Il Mistero della Notte',
        slug: 'bella-negra-mistero',
        excerpt: 'Nel cuore della notte più buia nasce Bella Negra IPA, una birra dal carattere profondo e misterioso.',
        featured_image: bellaNegra,
        published_at: '2024-03-20',
        created_at: '2024-03-20'
      }
    ];
    
    setTimeout(() => {
      setPosts(mockPosts);
      setLoading(false);
    }, 500);
  }, []);

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('it-IT', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-muted-foreground">Caricamento articoli...</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black-glossy">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center py-16 relative">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-primary/20 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-red-intense/15 rounded-full filter blur-3xl animate-float"></div>
          </div>
          <div className="relative z-10">
            <h1 className="font-anton text-6xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-gold-primary via-orange-warm to-red-intense mb-6 uppercase">
              News & Eventi
            </h1>
            <p className="font-lora text-xl text-white-warm max-w-2xl mx-auto">
              Resta aggiornato sulle nostre <span className="text-gold-primary">ultime creazioni</span>, eventi e storie dal mondo <span className="text-red-intense">Golden Shower</span>
            </p>
          </div>
        </section>

        {/* Search Section */}
        <section className="mb-12">
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Cerca articoli..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        {filteredPosts.length === 0 ? (
          <section className="text-center py-16">
            <div className="bg-black-glossy/60 backdrop-blur-xl border-2 border-gold-primary/30 rounded-2xl p-8 max-w-md mx-auto shadow-2xl">
              <h2 className="font-anton text-3xl text-gold-primary mb-4 uppercase">
                Prossimamente...
              </h2>
              <p className="font-lora text-white-warm mb-6">
                Stiamo preparando <span className="text-red-intense">contenuti esclusivi</span> per te. 
                Torna presto per scoprire le nostre <span className="text-pink-transgressive">ultime news provocanti</span>!
              </p>
              <Link to="/newsletter">
                <Button className="bg-gradient-to-r from-gold-primary to-orange-warm text-black-glossy font-montserrat font-bold hover:scale-105 transition-all">
                  Iscriviti alla Newsletter
                </Button>
              </Link>
            </div>
          </section>
        ) : (
          <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="bg-black-glossy/60 backdrop-blur-xl border-2 border-gold-primary/30 rounded-2xl group hover:scale-105 transition-all duration-300 shadow-2xl">
                <CardHeader className="p-0">
                  {post.featured_image && (
                    <div className="aspect-video overflow-hidden rounded-t-xl border-b-2 border-gold-primary/20">
                      <img
                        src={post.featured_image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-orange-warm mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4 text-gold-primary" />
                      {formatDate(post.published_at || post.created_at)}
                    </div>
                  </div>
                  
                  <h3 className="font-anton text-xl text-gold-primary mb-3 group-hover:text-orange-warm transition-colors uppercase">
                    {post.title}
                  </h3>
                  
                  <p className="font-lora text-white-warm text-sm line-clamp-3 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <Link to={`/blog/${post.slug}`}>
                    <Button className="w-full bg-gradient-to-r from-red-intense to-pink-transgressive text-white-warm font-montserrat font-bold hover:scale-105 transition-all">
                      Leggi di più
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </section>
        )}

        {/* Newsletter CTA */}
        <section className="py-16 text-center">
          <Card className="bg-gradient-to-br from-gold-primary/10 to-red-intense/10 backdrop-blur-xl border-2 border-gold-primary/30 rounded-2xl p-8 max-w-2xl mx-auto shadow-2xl">
            <h2 className="font-anton text-4xl text-transparent bg-clip-text bg-gradient-to-r from-gold-primary to-red-intense mb-4 uppercase">
              Non Perdere le Novità
            </h2>
            <p className="font-lora text-white-warm mb-6 leading-relaxed">
              Iscriviti alla nostra newsletter per ricevere aggiornamenti 
              su <span className="text-gold-primary">nuove birre provocanti</span>, <span className="text-red-intense">eventi esclusivi</span> e <span className="text-pink-transgressive">promozioni speciali</span>.
            </p>
            <Link to="/newsletter">
              <Button size="lg" className="bg-gradient-to-r from-gold-primary via-orange-warm to-red-intense text-black-glossy font-montserrat font-bold px-12 py-6 hover:scale-105 transition-all uppercase tracking-wide">
                Iscriviti Ora
              </Button>
            </Link>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
}
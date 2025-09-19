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
        title: 'Il Segreto della Fermentazione Perfetta',
        slug: 'segreto-fermentazione-perfetta',
        excerpt: 'Scopri i trucchi del mestiere che rendono uniche le nostre birre artigianali.',
        featured_image: '/src/assets/golden-shower-label.jpeg',
        published_at: '2024-03-15',
        created_at: '2024-03-15'
      },
      {
        id: '2',
        title: 'Red Head: La Nascita di una Ribelle',
        slug: 'red-head-nascita-ribelle',
        excerpt: 'La storia dietro la creazione della nostra Red Ale dal carattere indomito.',
        featured_image: '/src/assets/red-head-label.jpeg',
        published_at: '2024-03-10',
        created_at: '2024-03-10'
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
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center py-16 relative">
          <div className="absolute inset-0 psychedelic-stripes opacity-10"></div>
          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-display text-psychedelic mb-6">
              News & Eventi
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Resta aggiornato sulle nostre ultime creazioni, eventi e storie dal mondo Golden Shower
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
            <div className="card-psychedelic p-8 max-w-md mx-auto">
              <h2 className="text-2xl font-display text-psychedelic mb-4">
                Prossimamente...
              </h2>
              <p className="text-muted-foreground mb-6">
                Stiamo preparando contenuti esclusivi per te. 
                Torna presto per scoprire le nostre ultime news!
              </p>
              <Link to="/newsletter">
                <Button className="btn-golden">
                  Iscriviti alla Newsletter
                </Button>
              </Link>
            </div>
          </section>
        ) : (
          <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="card-psychedelic group hover:shadow-retro transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="p-0">
                  {post.featured_image && (
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <img
                        src={post.featured_image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {formatDate(post.published_at || post.created_at)}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-display text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  
                  <Link to={`/blog/${post.slug}`}>
                    <Button variant="outline" size="sm" className="w-full">
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
          <Card className="card-psychedelic p-8 max-w-2xl mx-auto">
            <h2 className="text-3xl font-display text-psychedelic mb-4">
              Non Perdere le Novità
            </h2>
            <p className="text-muted-foreground mb-6">
              Iscriviti alla nostra newsletter per ricevere aggiornamenti 
              su nuove birre, eventi esclusivi e promozioni speciali.
            </p>
            <Link to="/newsletter">
              <Button size="lg" className="btn-golden">
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
import { useParams } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar } from 'lucide-react';

const articles = {
  'segreto-fermentazione-perfetta': {
    title: 'Il Segreto della Fermentazione Perfetta',
    date: '2024-03-15',
    image: '/src/assets/golden-shower-label.jpeg',
    content: `La fermentazione è l'anima della birra, il processo magico che trasforma semplici ingredienti in una bevanda straordinaria. 

Ogni nostro mastro birraio segue antiche tradizioni combinate con tecniche moderne per creare sapori unici e indimenticabili.`
  },
  'red-head-nascita-ribelle': {
    title: 'Red Head: La Nascita di una Ribelle',
    date: '2024-03-10', 
    image: '/src/assets/red-head-label.jpeg',
    content: `Red Head non è solo una birra, è un manifesto di ribellione contro l'ordinario. 

Nata dalla passione per i sapori intensi e dal desiderio di creare qualcosa di veramente provocatorio, questa ale rossa rappresenta il coraggio di osare.`
  }
};

export default function BlogArticle() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? articles[slug as keyof typeof articles] : null;

  if (!article) {
    return (
      <div className="min-h-screen bg-black-glossy">
        <Header />
        <main className="container mx-auto px-4 py-16 text-center">
          <h1 className="font-anton text-4xl text-gold-primary mb-4">Articolo non trovato</h1>
          <Link to="/blog">
            <Button>Torna al Blog</Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('it-IT', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-black-glossy">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link to="/blog" className="inline-flex items-center gap-2 text-gold-primary hover:text-orange-warm transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Torna al Blog
          </Link>

          {/* Article */}
          <Card className="bg-black-glossy/60 backdrop-blur-xl border-2 border-gold-primary/30 rounded-2xl overflow-hidden shadow-2xl">
            {/* Featured Image */}
            {article.image && (
              <div className="aspect-video overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <CardContent className="p-8">
              {/* Date */}
              <div className="flex items-center gap-2 text-orange-warm mb-4">
                <Calendar className="w-4 h-4 text-gold-primary" />
                {formatDate(article.date)}
              </div>

              {/* Title */}
              <h1 className="font-anton text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-gold-primary to-red-intense mb-8 uppercase">
                {article.title}
              </h1>

              {/* Content */}
              <div className="prose prose-lg max-w-none">
                {article.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="font-lora text-white-warm leading-relaxed mb-6 text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-12 text-center">
                <Card className="inline-block bg-gradient-to-br from-gold-primary/10 to-red-intense/10 backdrop-blur-sm border border-gold-primary/30 p-6">
                  <CardContent className="p-0">
                    <h3 className="font-anton text-2xl text-gold-primary mb-4 uppercase">
                      Scopri le nostre Birre
                    </h3>
                    <Link to="/catalogo">
                      <Button size="lg" className="bg-gradient-to-r from-gold-primary to-orange-warm text-black-glossy font-montserrat font-bold px-8 py-4 hover:scale-105 transition-all">
                        Vai al Catalogo
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
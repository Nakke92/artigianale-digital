import { useParams } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar } from 'lucide-react';

const articles = {
  'segreto-fermentazione-perfetta': {
    title: 'Golden Shower IPA – La Leggenda',
    date: '2024-03-15',
    image: '/src/assets/golden-shower-label.jpeg',
    content: `Si racconta che, in un polveroso saloon ai confini del West, un poeta vagabondo trovò rifugio dopo giorni di cavalcate sotto il sole cocente. Lì incontrò una donna dal sorriso selvaggio e dagli occhi di fuoco. La loro fu un’unione dirompente, una notte di passione che incendiò l’aria, fatta di risate, sorsi di whiskey e sudore.

Quando l’alba sorse, il poeta fu investito da un’ultima, travolgente cascata di emozioni, un lampo dorato che gli rimase impresso nella memoria come il ricordo di un tuono nella prateria. Tornato alla sua fattoria, ancora ebbro di quella notte, si chiuse nel suo granaio e mescolò luppoli e malti, guidato solo dall’istinto.

Nacque così la ricetta della Golden Shower IPA: una birra dorata come il sole del deserto, carica di aromi che ricordano frutti maturi e agrumi freschi, e con un finale amaro che pizzica come un bacio rubato.

Da allora, ogni sorso è un ritorno a quella notte di libertà, di desiderio e di sfida alle regole. È più di una birra: è una leggenda che scorre nel bicchiere, una provocazione che accende i sensi e lascia il segno.`
  },

  'red-head-nascita-ribelle': {
    title: 'Red Head: La Nascita di una Ribelle',
    date: '2024-03-10', 
    image: '/src/assets/red-head-label.jpeg',
    content: `Nelle vaste praterie intorno ad Abilene, nel cuore del Vecchio West, due viaggiatori si persero tra sentieri polverosi , fino a incrociare un villaggio di nativi americani, nascosto tra campi di grano infuocati e fuochi che tremolavano nel crepuscolo. Lì, tra i tamburi lontani e le voci cantilenanti, tutto sembrava sospeso nel tempo, avvolto da un’aura di mistero e serenità primordiale.

              Vicino al fiume, dove le acque lambivano le rive e riflettevano il tramonto, lavando i panni dei villaggi, apparve lei: una ragazza nativa, pelle rossa e capelli color rubino come il fuoco dei campi al tramonto, con una piuma che danzava tra le ciocche. Sembrava un miraggio, sospesa tra il cielo e le onde scarlatte del tramonto. I suoi occhi catturavano la luce come piccole stelle liquide, e ogni movimento era un gioco di bagliori e riflessi che incantava chiunque la guardasse.

              I due si avvicinarono folgorati verso di lei con sorrisi audaci e mani irrequiete e desiderio palpabile. La ragazza ridacchiava e si lasciava prendere dal gioco, i capelli rossi come fiamme vive che si fondevano ai riflessi rossi e aranci del tramonto e al luccichio del fiume.

              Ogni tocco era un invito, ogni sguardo una provocazione ardente. Correva tra i campi di grano, tra i fumi dei fuochi e le ombre delle tende del villaggio, intrecciandosi in un vortice di risate, calore e desiderio. L’aria vibrava di passione, i profumi della terra umida e della paglia si mescolavano a quello della ragazza, creando un turbine sensoriale che li avvolgeva completamente.

              Il tramonto tingeva tutto di un rosso cosi intenso che i suoi capelli sembravano un vero e proprio falò. Ogni gesto, ogni rincorsa, ogni carezza li faceva sentire sospesi in un mondo tutto loro, un inferno dorato e celeste dove il tempo si piegava e il desiderio bruciava come brace viva. Era gioco, era fuoco, era passione che li consumava insieme.

              I due ancora rapiti dal ricordo di quella notte, decisero di catturare quell’essenza di passione e fuoco in una birra: nacque così la Red Head IPA, rossa e vibrante come i capelli della ragazza, con aromi di frutti maturi e un amaro deciso che pizzica come un bacio rubato.

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
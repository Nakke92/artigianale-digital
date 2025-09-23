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
    image: '/src/assets/golden-shower-new.jpeg',
    content: `Si racconta che, in un paesino polveroso del Vecchio West, il governatore di Dodge City si fosse smarrito durante un viaggio tra deserti e colline assolate. La sua figura elegante e fiera dominava la strada principale, e ogni raggio di luce dorata illuminava i suoi capelli e il volto scolpito.

              Una sera, tra bagliori dorati e sussurri ovattati dei saloon, i suoi occhi si persero in quelli di una giovane donna bionda e radiosa, dalle curve armoniose e dalle piccole rotondità che rifrangevano ogni scintilla di luce. I suoi occhi celesti cristallino brillavano come un cielo d’estate terso e infinito, la bocca delicata e sinuosa pareva scolpita dalla luce, il naso perfetto e gli zigomi alti: un’epifania di bellezza pura e celestiale.

              Quella notte, tra sorsi di birra e risate dorate, la passione esplose. Il cielo lampeggiava di emozioni luminose, e ogni gesto, ogni sorriso, ogni carezza diventava un bagliore intenso nel cuore del governatore. Un ricordo indelebile rimase impresso sui suoi baffi: uno schizzo improvviso lo segnò per mesi, come un segno irriverente e luminoso di quella notte unica.

              Tornato alla sua residenza, ancora avvolto dalla memoria di quella donna e dalla luce dorata della notte, il governatore mescolò luppoli e malti, guidato solo dall’istinto e dall’eco di quel cielo giallo e celeste.

              Così nacque la Golden Shower IPA: una birra dorata come il sole del deserto, aromi di frutti maturi e agrumi freschi, con un finale amaro che pizzica come un bacio rubato.

Ogni sorso è un viaggio indietro a quella notte di libertà e desiderio, un ricordo luminoso che accende i sensi e lascia il segno. Non è solo birra: è leggenda che scorre nel bicchiere, intensa e indimenticabile.`
  },

  'red-head-nascita-ribelle': {
    title: 'Red Head: La Nascita di una Ribelle',
    date: '2024-03-10', 
    image: '/src/assets/red-head-new.jpeg',
    content: `Nelle vaste praterie intorno ad Abilene, nel cuore del Vecchio West, due viaggiatori si persero tra sentieri polverosi , fino a incrociare un villaggio di nativi americani, nascosto tra campi di grano e fuochi che tremolavano nel crepuscolo. Lì, tra i tamburi lontani e le voci cantilenanti, tutto sembrava sospeso nel tempo, avvolto da un’aura di mistero e serenità primordiale.

              Vicino al fiume, dove le acque lambivano le rive e riflettevano il tramonto, lavando i panni dei villaggi, apparve lei: una ragazza nativa, pelle di un rosa tenue e capelli color rubino come il fuoco al tramonto. Sembrava un miraggio, sospesa tra il cielo e le onde scarlatte dei campi di grando. I suoi occhi catturavano la luce come piccole stelle liquide, e ogni movimento era un gioco di bagliori e riflessi che incantava chiunque la guardasse.

              I due si avvicinarono folgorati verso di lei con sorrisi audaci e mani irrequiete e desiderio palpabile. La ragazza ridacchiava e si lasciava prendere dal gioco, i capelli rossi come fiamme vive si fondevano ai riflessi arancio del tramonto e al luccichio del fiume.

              Ogni tocco era un invito, ogni sguardo una provocazione ardente. Correva tra i campi di grano, tra i fumi dei fuochi e le ombre delle tende del villaggio, intrecciandosi in un vortice di risate, calore e desiderio. L’aria vibrava di passione, i profumi della terra umida e della paglia si mescolavano a quello della ragazza, creando un turbine sensoriale che li avvolgeva completamente.

              Il tramonto tingeva tutto di un rosso cosi intenso che i suoi capelli sembravano un vero e proprio falò. Ogni gesto, ogni carezza li faceva sentire sospesi in un mondo tutto loro, un inferno dorato e celeste dove il tempo si piegava e il desiderio bruciava come brace viva. Era gioco, era fuoco, era passione che li consumava insieme.

              I due, ancora rapiti dal ricordo di quella notte, decisero di catturare quell’essenza di passione e fuoco in una birra: nacque così la Red Head IPA, rossa e vibrante come i capelli della ragazza, con aromi di frutti maturi e un amaro deciso che pizzica come un bacio rubato.

Nata dalla passione per i sapori intensi e dal desiderio di creare qualcosa di veramente provocatorio, questa ale rossa rappresenta il coraggio di osare.`
  },

  'bella-negra-mistero': {
    title: 'Bella Negra: Il Mistero della Notte',
    date: '2024-03-20',
    image: '/src/assets/bella-negra-new.png', 
    content: `Nel cuore della notte più buia, quando le stelle sembrano sussurrare segreti antichi, nasce Bella Negra IPA. Una birra dal carattere profondo e misterioso, come una bella donna dalla pelle scura che danza sotto la luna.

La sua essenza racchiude il fascino dell'ignoto e la seduzione dell'oscurità, un sapore intenso che avvolge i sensi in un abbraccio vellutato e provocante.`
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
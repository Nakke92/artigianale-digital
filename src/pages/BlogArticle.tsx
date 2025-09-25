import { useParams } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar } from 'lucide-react';

// ✅ Import delle immagini
import bellaNegra from '@/assets/bella-negra-new.png';

const articles = {
  'segreto-fermentazione-perfetta': {
    title: 'Golden Shower IPA – La Leggenda',
    date: '2024-03-15',
    image: '/whatsapp-2025-09-24-16-05-04.webp',
    content: `Si racconta che, in un paesino polveroso del Vecchio West, il governatore di Dodge City si fosse smarrito durante un viaggio tra deserti e colline assolate. La sua figura elegante e fiera dominava la strada principale, e ogni raggio di luce dorata illuminava i suoi capelli e il volto scolpito.

              Una sera, tra bagliori dorati e sussurri ovattati dei saloon, i suoi occhi si persero in quelli di una giovane donna bionda e radiosa, dalle curve armoniose e dalle piccole rotondità che rifrangevano ogni scintilla di luce. I suoi occhi celesti cristallino brillavano come un cielo d’estate terso e infinito, la bocca delicata e sinuosa pareva scolpita dalla luce, il naso perfetto e gli zigomi alti: un’epifania di bellezza pura e celestiale.

              Quella notte, tra sorsi di birra e risate dorate, la passione esplose. Il cielo lampeggiava di emozioni luminose, e ogni gesto, ogni sorriso, ogni carezza diventava un bagliore intenso nel cuore del governatore. Un ricordo indelebile rimase impresso sui suoi baffi: uno schizzo improvviso lo segnò per mesi, come un segno irriverente e luminoso di quella notte unica.

              Tornato alla sua residenza, ancora avvolto dalla memoria di quella donna e dalla luce dorata della notte, il governatore mescolò luppoli e malti, guidato solo dall’istinto e dall’eco di quel cielo giallo e celeste.

              Così nacque la Golden Shower IPA: una birra dorata come il sole del deserto, aromi di frutti maturi e agrumi freschi, con un finale amaro che pizzica come un bacio rubato.

Ogni sorso è un viaggio indietro a quella notte di libertà e desiderio, un ricordo luminoso che accende i sensi e lascia il segno. Non è solo birra: è leggenda che scorre nel bicchiere, intensa e indimenticabile.`,
    specifications: [
      { parameter: 'ABV (Alcohol By Volume)', description: 'Percentuale di alcol. Indica il corpo e la forza della birra.', value: '5.8%' },
      { parameter: 'IBU (International Bitterness Units)', description: 'Unità di amaro. Più è alto, più la birra è amara.', value: '45' },
      { parameter: 'EBC / SRM (Colore)', description: 'Scala del colore della birra (giallo paglierino → nero).', value: 'EBC 15 (giallo dorato)' },
      { parameter: 'OG (Original Gravity)', description: 'Densità iniziale del mosto, indica zuccheri fermentabili.', value: '1.069' },
      { parameter: 'FG (Final Gravity)', description: 'Densità finale dopo fermentazione, indica corpo residuo.', value: '1.015' },
      { parameter: 'Carbonazione', description: 'Livello di frizzantezza, espresso in volumi di CO₂.', value: '2.6 vol.' },
      { parameter: 'Luppoli', description: 'Varietà di luppolo usati', value: 'Idaho 7, Sabro, Magnum' },
      { parameter: 'Malti', description: 'Tipi di malto usati', value: 'Pilsner, Maris Otler' },
      { parameter: 'Fermentazione', description: 'Tipo di lievito / fermentazione.', value: 'Alta fermentazione (English Ale Yeast)' },
      { parameter: 'Note di Degustazione', description: 'Aromi e sapori percepiti.', value: 'Frutta tropicale, agrumi e suggestioni esotiche.' }
    ]
  },

  'red-head-nascita-ribelle': {
    title: 'Red Head: La Nascita di una Ribelle',
    date: '2024-03-10', 
    image: '/public/WhatsApp Image 2025-09-24 at 16.05.05.webp',
    content: `Nelle vaste praterie intorno ad Abilene, nel cuore del Vecchio West, due viaggiatori si persero tra sentieri polverosi , fino a incrociare un villaggio di nativi americani, nascosto tra campi di grano e fuochi che tremolavano nel crepuscolo. Lì, tra i tamburi lontani e le voci cantilenanti, tutto sembrava sospeso nel tempo, avvolto da un’aura di mistero e serenità primordiale.

              Vicino al fiume, dove le acque lambivano le rive e riflettevano il tramonto, lavando i panni dei villaggi, apparve lei: una ragazza nativa, pelle di un rosa tenue e capelli color rubino come il fuoco al tramonto. Sembrava un miraggio, sospesa tra il cielo e le onde scarlatte dei campi di grano. I suoi occhi catturavano la luce come piccole stelle liquide, e ogni movimento era un gioco di bagliori e riflessi che incantava chiunque la guardasse.

              I due si avvicinarono folgorati verso di lei con sorrisi audaci, mani irrequiete e desiderio palpabile. La ragazza ridacchiava e si lasciava prendere dal gioco, i capelli rossi come fiamme vive si fondevano ai riflessi arancio del tramonto e al luccichio del fiume.

              Ogni tocco era un invito, ogni sguardo una provocazione ardente. Correva tra i campi di grano, tra i fumi dei fuochi e le ombre delle tende del villaggio, intrecciandosi in un vortice di risate, calore e desiderio. L’aria vibrava di passione, i profumi della terra umida e della paglia si mescolavano a quello della ragazza, creando un turbine sensoriale che li avvolgeva completamente.

              Il tramonto tingeva tutto di un rosso cosi intenso che i suoi capelli sembravano un vero e proprio falò. Ogni gesto, ogni carezza li faceva sentire sospesi in un mondo tutto loro, un inferno dorato e celeste dove il tempo si piegava e il desiderio bruciava come brace viva. Era gioco, era fuoco, era passione che li consumava insieme.

              I due, ancora rapiti dal ricordo di quella notte, decisero di catturare quell’essenza di passione e fuoco in una birra: nacque così la Red Head IPA, rossa e vibrante come i capelli della ragazza, con aromi di frutti maturi e un amaro deciso che pizzica come un bacio rubato.

Nata dalla passione per i sapori intensi e dal desiderio di creare qualcosa di veramente provocatorio, questa ale rossa rappresenta il coraggio di osare.`,
    specifications: [
      { parameter: 'ABV (Alcohol By Volume)', description: 'Percentuale di alcol. Indica il corpo e la forza della birra.', value: '6.2%' },
      { parameter: 'IBU (International Bitterness Units)', description: 'Unità di amaro. Più è alto, più la birra è amara.', value: '45' },
      { parameter: 'EBC / SRM (Colore)', description: 'Scala del colore della birra (giallo paglierino → nero).', value: 'EBC 25 (rosso rubino)' },
      { parameter: 'OG (Original Gravity)', description: 'Densità iniziale del mosto, indica zuccheri fermentabili.', value: '1.065' },
      { parameter: 'FG (Final Gravity)', description: 'Densità finale dopo fermentazione, indica corpo residuo.', value: '1.012' },
      { parameter: 'Carbonazione', description: 'Livello di frizzantezza, espresso in volumi di CO₂.', value: '2.2 vol.' },
      { parameter: 'Luppoli', description: 'Varietà di luppolo usati', value: 'Cascade, Centennial, Chinook' },
      { parameter: 'Malti', description: 'Tipi di malto usati', value: 'Crystal, Munich, Caramel' },
      { parameter: 'Fermentazione', description: 'Tipo di lievito / fermentazione.', value: 'Alta fermentazione (English Ale Yeast)' },
      { parameter: 'Note di Degustazione', description: 'Aromi e sapori percepiti.', value: 'Frutti rossi, caramello, spezie, finale caldo e persistente.' }
    ]
  },

  'bella-negra-mistero': {
    title: 'Bella Negra: Il Mistero della Notte',
    date: '2024-03-20',
    image: bellaNegra, 
    content: `Nella polverosa Tombstone in Arizona, il sole tramontava dietro le colline e il vento portava con sé l’odore del fieno secco e del fumo dei camini. Quel giorno il marshal aveva catturato una delle bande più temute del West, uomini senza paura che avevano terrorizzato la regione per mesi. Ma quando la polvere si posò, tra i fuorilegge incatenati c’era lei: Bella Negra.

              La sua presenza era diversa. Alta, fiera, con i capelli corvini che le scendevano fino ai fianchi e uno sguardo che sfidava il mondo. Non disse una parola mentre la rinchiudevano nella cella di isolamento, ma negli occhi le brillava un fuoco indomabile.

              Quella notte, la luna piena illuminava il piccolo ufficio dello sceriffo. Il silenzio era rotto solo dal frinire dei grilli e dallo scricchiolio del legno vecchio. Il marshal non riusciva a staccare gli occhi da quella cella: la figura della donna, immobile sotto la luce argentea, sembrava una statua scolpita da un artista greco. Eppure, c’era qualcosa di selvaggio in lei, qualcosa che lo attirava come una fiamma attira la polvere.

              Si avvicinò, quasi senza rendersene conto. Bella Negra lo fissò, e in quello sguardo c’era un intero deserto: sabbia, vento e tempesta. In un istante il marshal sentì il cuore battergli nel petto come un tamburo di guerra. Fu un momento sospeso nel tempo, un sortilegio che nessuno dei due avrebbe mai dimenticato.

              Al mattino la cella era vuota. Nessuno seppe dire come fosse fuggita, ma l’unica traccia che lasciò fu il ricordo di quella notte e il profumo della sua pelle che sembrava ancora fluttuare nell’aria. Il marshal, incapace di tornare alla vita di sempre, decise di rendere eterna quella memoria.

Convocò il miglior mastro birraio del West e gli raccontò ogni dettaglio. Così nacque Bella Negra IPA, una birra intensa, oscura e seducente, capace di riportare chiunque a quella notte carica di magia.`,
    specifications: [
      { parameter: 'ABV (Alcohol By Volume)', description: 'Percentuale di alcol. Indica il corpo e la forza della birra.', value: '6.8%' },
      { parameter: 'IBU (International Bitterness Units)', description: 'Unità di amaro. Più è alto, più la birra è amara.', value: '55' },
      { parameter: 'EBC / SRM (Colore)', description: 'Scala del colore della birra (giallo paglierino → nero).', value: 'EBC 80 (nero profondo)' },
      { parameter: 'OG (Original Gravity)', description: 'Densità iniziale del mosto, indica zuccheri fermentabili.', value: '1.070' },
      { parameter: 'FG (Final Gravity)', description: 'Densità finale dopo fermentazione, indica corpo residuo.', value: '1.015' },
      { parameter: 'Carbonazione', description: 'Livello di frizzantezza, espresso in volumi di CO₂.', value: '2.3 vol.' },
      { parameter: 'Luppoli', description: 'Varietà di luppolo usati', value: 'Columbus, Magnum, Warrior' },
      { parameter: 'Malti', description: 'Tipi di malto usati', value: 'Black Patent, Chocolate, Roasted Barley' },
      { parameter: 'Fermentazione', description: 'Tipo di lievito / fermentazione.', value: 'Alta fermentazione (American Ale Yeast)' },
      { parameter: 'Note di Degustazione', description: 'Aromi e sapori percepiti.', value: 'Caffè, cioccolato fondente, vaniglia, finale intenso e vellutato.' }
    ]
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

              {/* Specifications Section */}
              {(article as any).specifications && (
                <div className="mt-12 mb-8">
                  <h2 className="font-anton text-3xl text-gold-primary mb-6 uppercase">Specifiche</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gold-primary/30 rounded-lg overflow-hidden">
                      <thead>
                        <tr className="bg-gradient-to-r from-gold-primary/20 to-orange-warm/20">
                          <th className="border border-gold-primary/30 p-4 text-left font-anton text-gold-primary uppercase">Parametro</th>
                          <th className="border border-gold-primary/30 p-4 text-left font-anton text-gold-primary uppercase">Descrizione</th>
                          <th className="border border-gold-primary/30 p-4 text-left font-anton text-gold-primary uppercase">Valore</th>
                        </tr>
                      </thead>
                      <tbody>
                        {(article as any).specifications.map((spec: any, index: number) => (
                          <tr key={index} className="hover:bg-gold-primary/5 transition-colors">
                            <td className="border border-gold-primary/30 p-4 font-montserrat font-semibold text-orange-warm">{spec.parameter}</td>
                            <td className="border border-gold-primary/30 p-4 font-lora text-white-warm">{spec.description}</td>
                            <td className="border border-gold-primary/30 p-4 font-montserrat font-bold text-gold-primary">{spec.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

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
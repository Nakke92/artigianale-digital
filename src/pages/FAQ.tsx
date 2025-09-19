import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function FAQ() {
  const faqSections = [
    {
      title: "Spedizioni e Consegne",
      icon: "🚚",
      faqs: [
        {
          question: "Quali sono i tempi di consegna?",
          answer: "Spediamo entro 24-48 ore dal ricevimento dell'ordine. I tempi di consegna sono di 2-5 giorni lavorativi per l'Italia continentale. Per isole e zone remote, i tempi possono essere di 5-7 giorni lavorativi."
        },
        {
          question: "Quanto costa la spedizione?",
          answer: "La spedizione standard costa €4.90 per ordini sotto i €50. Spedizione gratuita per ordini superiori a €50. La spedizione express (24-48h) costa €8.90."
        },
        {
          question: "Posso ritirare l'ordine presso il birrificio?",
          answer: "Sì! Puoi selezionare l'opzione 'Ritiro in sede' durante il checkout. Ti invieremo una conferma quando l'ordine sarà pronto per il ritiro presso la nostra sede."
        },
        {
          question: "Spedite all'estero?",
          answer: "Attualmente spediamo solo in Italia. Stiamo lavorando per estendere le spedizioni in Europa. Iscriviti alla newsletter per essere aggiornato!"
        }
      ]
    },
    {
      title: "Prodotti e Qualità",
      icon: "🍺",
      faqs: [
        {
          question: "Come conservare le birre Golden Shower?",
          answer: "Conserva le birre in luogo fresco e asciutto, lontano dalla luce diretta, a temperatura tra 5-12°C. Una volta aperta, consumare entro 24 ore per mantenere la qualità ottimale."
        },
        {
          question: "Qual è la scadenza delle vostre birre?",
          answer: "Le nostre birre hanno una shelf life di 12 mesi dalla data di produzione. La data di scadenza è sempre chiaramente indicata su ogni bottiglia."
        },
        {
          question: "Le vostre birre sono pastorizzate?",
          answer: "No, le nostre birre sono artigianali non pastorizzate e non filtrate, per preservare tutti i sapori e le proprietà organolettiche naturali."
        },
        {
          question: "Utilizzate additivi o conservanti?",
          answer: "Assolutamente no. Utilizziamo solo acqua, malto, luppolo e lievito. Nessun additivo chimico o conservante artificiale."
        }
      ]
    },
    {
      title: "Ordini e Pagamenti",
      icon: "💳",
      faqs: [
        {
          question: "Quali metodi di pagamento accettate?",
          answer: "Accettiamo tutte le principali carte di credito e debito (Visa, Mastercard, American Express), PayPal, Apple Pay e Google Pay tramite Stripe."
        },
        {
          question: "Posso modificare o cancellare il mio ordine?",
          answer: "Puoi modificare o cancellare l'ordine entro 2 ore dal completamento dell'acquisto. Contattaci immediatamente via email o telefono."
        },
        {
          question: "Emettete fattura?",
          answer: "Sì, puoi richiedere la fattura durante il checkout inserendo i dati aziendali. La fattura elettronica sarà inviata automaticamente."
        },
        {
          question: "Posso ordinare senza registrarmi?",
          answer: "Sì, offriamo la possibilità di checkout come ospite. Tuttavia, creare un account ti permette di tracciare gli ordini e accedere a promozioni esclusive."
        }
      ]
    },
    {
      title: "Età e Responsabilità",
      icon: "🔞",
      faqs: [
        {
          question: "C'è un limite di età per acquistare?",
          answer: "Sì, devi avere almeno 18 anni per acquistare prodotti alcolici. Verifichiamo l'età durante la registrazione e potremmo richiedere un documento alla consegna."
        },
        {
          question: "Cosa succede se non sono presente alla consegna?",
          answer: "Il corriere tenterà la consegna 2-3 volte. Se nessuno è presente, il pacco sarà depositato presso l'ufficio postale più vicino. Per prodotti alcolici, è richiesta la presenza di un maggiorenne."
        },
        {
          question: "Informazioni sul consumo responsabile?",
          answer: "Raccomandiamo sempre un consumo responsabile. Le nostre birre contengono alcol (indicato come ABV su ogni prodotto). Non consumare se guidi, sei in gravidanza o allattamento."
        }
      ]
    },
    {
      title: "Resi e Rimborsi",
      icon: "↩️",
      faqs: [
        {
          question: "Posso restituire un prodotto?",
          answer: "Per ragioni igieniche e di sicurezza alimentare, non accettiamo resi di prodotti alimentari e bevande, salvo in caso di prodotti difettosi o danneggiati durante il trasporto."
        },
        {
          question: "Cosa fare se ricevo un prodotto danneggiato?",
          answer: "Contattaci immediatamente con foto del prodotto danneggiato. Provvederemo alla sostituzione gratuita o al rimborso completo entro 48 ore."
        },
        {
          question: "Tempi di rimborso?",
          answer: "I rimborsi vengono processati entro 5-7 giorni lavorativi e accreditati secondo i tempi del tuo istituto bancario (generalmente 2-5 giorni lavorativi)."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center py-16 relative">
          <div className="absolute inset-0 retro-dots opacity-20"></div>
          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-display text-psychedelic mb-6">
              Domande Frequenti
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Trova risposta alle domande più comuni su spedizioni, prodotti e ordini
            </p>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="max-w-4xl mx-auto">
          {faqSections.map((section, index) => (
            <Card key={index} className="card-psychedelic mb-8">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{section.icon}</span>
                  <h2 className="text-2xl font-display text-psychedelic">
                    {section.title}
                  </h2>
                </div>

                <Accordion type="single" collapsible>
                  {section.faqs.map((faq, faqIndex) => (
                    <AccordionItem key={faqIndex} value={`${index}-${faqIndex}`}>
                      <AccordionTrigger className="text-left font-medium hover:text-primary">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Contact CTA */}
        <section className="py-16 text-center">
          <Card className="card-psychedelic p-8 max-w-2xl mx-auto">
            <h2 className="text-3xl font-display text-psychedelic mb-4">
              Non hai trovato la risposta?
            </h2>
            <p className="text-muted-foreground mb-6">
              Il nostro team è qui per aiutarti. Contattaci per qualsiasi domanda 
              o dubbio sui nostri prodotti e servizi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contatti">
                <Button size="lg" className="btn-golden">
                  Contattaci
                </Button>
              </Link>
              <a href="mailto:info@goldenshower.beer">
                <Button size="lg" variant="outline">
                  Scrivi una Email
                </Button>
              </a>
            </div>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
}
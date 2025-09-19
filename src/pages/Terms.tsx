import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function Terms() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <section className="max-w-4xl mx-auto">
          <div className="text-center py-16 relative">
            <div className="absolute inset-0 psychedelic-stripes opacity-10"></div>
            <div className="relative z-10">
              <h1 className="text-4xl md:text-6xl font-display text-psychedelic mb-6">
                Termini e Condizioni
              </h1>
              <p className="text-xl text-muted-foreground">
                Condizioni generali di vendita
              </p>
            </div>
          </div>

          <Card className="card-psychedelic">
            <CardContent className="p-8 space-y-8">
              <section>
                <h2 className="text-2xl font-display text-psychedelic mb-4">1. Informazioni Generali</h2>
                <p className="text-muted-foreground">
                  Questi termini e condizioni regolano l'utilizzo del sito web e l'acquisto 
                  di prodotti da Golden Shower Brewery S.r.l., con sede in Via della Birra 
                  Artigianale, 42 - 00100 Roma (RM), P.IVA: 12345678901.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-display text-psychedelic mb-4">2. Prodotti e Prezzi</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Tutti i prodotti sono birre artigianali contenenti alcol</li>
                  <li>I prezzi sono espressi in Euro, IVA inclusa</li>
                  <li>I prezzi possono essere modificati senza preavviso</li>
                  <li>Le foto sono indicative e possono differire dal prodotto reale</li>
                  <li>La disponibilità dei prodotti è soggetta alle scorte</li>
                </ul>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-display text-psychedelic mb-4">3. Ordini e Pagamenti</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Gli ordini si considerano accettati solo dopo conferma scritta</li>
                  <li>Il pagamento deve essere effettuato al momento dell'ordine</li>
                  <li>Accettiamo carte di credito, PayPal, Apple Pay e Google Pay</li>
                  <li>Ci riserviamo il diritto di annullare ordini fraudolenti</li>
                  <li>In caso di indisponibilità, rimborseremo l'importo versato</li>
                </ul>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-display text-psychedelic mb-4">4. Spedizione e Consegna</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Spediamo solo in Italia</li>
                  <li>I tempi di consegna sono indicativi: 2-5 giorni lavorativi</li>
                  <li>La spedizione è gratuita per ordini superiori a €50</li>
                  <li>Il rischio di trasporto passa al cliente al momento della consegna</li>
                  <li>È necessaria la presenza di un maggiorenne alla consegna</li>
                </ul>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-display text-psychedelic mb-4">5. Diritto di Recesso</h2>
                <p className="text-muted-foreground mb-4">
                  In conformità al Codice del Consumo, il diritto di recesso non si applica 
                  ai prodotti alimentari e alle bevande per motivi igienico-sanitari, 
                  salvo in caso di:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Prodotti difettosi o danneggiati</li>
                  <li>Errore nella spedizione</li>
                  <li>Prodotti non conformi all'ordine</li>
                </ul>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-display text-psychedelic mb-4">6. Garanzie e Responsabilità</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Garantiamo la qualità dei nostri prodotti</li>
                  <li>Seguiamo tutti gli standard igienico-sanitari</li>
                  <li>La nostra responsabilità è limitata al valore dell'ordine</li>
                  <li>Non siamo responsabili per usi impropri dei prodotti</li>
                  <li>Escludiamo responsabilità per danni indiretti</li>
                </ul>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-display text-psychedelic mb-4">7. Età e Responsabilità</h2>
                <p className="text-muted-foreground mb-4">
                  I nostri prodotti sono destinati esclusivamente a maggiorenni:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>È vietata la vendita a minori di 18 anni</li>
                  <li>Raccomandiamo un consumo responsabile</li>
                  <li>Non consumare in gravidanza o allattamento</li>
                  <li>Non guidare dopo aver consumato alcol</li>
                  <li>Rispettare le dosi consigliate</li>
                </ul>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-display text-psychedelic mb-4">8. Proprietà Intellettuale</h2>
                <p className="text-muted-foreground">
                  Tutti i contenuti del sito (testi, immagini, loghi, design) sono protetti 
                  da copyright e marchi registrati. È vietata la riproduzione non autorizzata.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-display text-psychedelic mb-4">9. Modifica dei Termini</h2>
                <p className="text-muted-foreground">
                  Ci riserviamo il diritto di modificare questi termini in qualsiasi momento. 
                  Le modifiche saranno pubblicate su questa pagina e avranno effetto immediato.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-display text-psychedelic mb-4">10. Legge Applicabile e Foro</h2>
                <p className="text-muted-foreground">
                  Questi termini sono regolati dalla legge italiana. Per qualsiasi controversia 
                  è competente il Foro di Roma.
                </p>
                <p className="text-muted-foreground mt-4 text-sm">
                  Ultimo aggiornamento: 19 settembre 2024
                </p>
              </section>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
}
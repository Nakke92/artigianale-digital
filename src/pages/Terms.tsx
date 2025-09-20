import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function Terms() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Liquid Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-amber-950/30 to-orange-900/40"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-gold-primary/30 to-orange-500/30 rounded-full mix-blend-multiply filter blur-xl animate-float opacity-70"></div>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-red-intense/30 to-pink-500/30 rounded-full mix-blend-multiply filter blur-xl animate-float animation-delay-2000 opacity-60"></div>
          <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-gradient-to-r from-orange-400/30 to-yellow-500/30 rounded-full mix-blend-multiply filter blur-xl animate-float animation-delay-4000 opacity-50"></div>
        </div>
      </div>

      <Header />
      
      <main className="relative z-10 container mx-auto px-4 py-8">
        <section className="max-w-4xl mx-auto">
          <div className="text-center py-16 relative">
            <div className="relative z-10">
              <h1 className="text-4xl md:text-6xl font-display text-golden mb-6 animate-pulse-golden">
                Termini e Condizioni
              </h1>
              <p className="text-xl text-white/90">
                Condizioni generali di vendita
              </p>
            </div>
          </div>

          <Card className="bg-black/40 backdrop-blur-sm border border-gold-primary/30 hover:border-gold-primary/50 transition-all duration-300">
            <CardContent className="p-8 space-y-8">
              <section>
                <h2 className="text-2xl font-display text-golden mb-4">1. Informazioni Generali</h2>
                <p className="text-white/80">
                  Questi termini e condizioni regolano l'utilizzo del sito web e l'acquisto 
                  di prodotti da Golden Shower Brewery S.r.l., con sede in Via della Birra 
                  Artigianale, 42 - 00100 Roma (RM), P.IVA: 12345678901.
                </p>
              </section>

              <Separator className="bg-gold-primary/30" />

              <section>
                <h2 className="text-2xl font-display text-golden mb-4">2. Prodotti e Prezzi</h2>
                <ul className="list-disc list-inside space-y-2 text-white/70">
                  <li>Tutti i prodotti sono birre artigianali contenenti alcol</li>
                  <li>I prezzi sono espressi in Euro, IVA inclusa</li>
                  <li>I prezzi possono essere modificati senza preavviso</li>
                  <li>Le foto sono indicative e possono differire dal prodotto reale</li>
                  <li>La disponibilità dei prodotti è soggetta alle scorte</li>
                </ul>
              </section>

              <Separator className="bg-gold-primary/30" />

              <section>
                <h2 className="text-2xl font-display text-golden mb-4">3. Ordini e Pagamenti</h2>
                <ul className="list-disc list-inside space-y-2 text-white/70">
                  <li>Gli ordini si considerano accettati solo dopo conferma scritta</li>
                  <li>Il pagamento deve essere effettuato al momento dell'ordine</li>
                  <li>Accettiamo carte di credito, PayPal, Apple Pay e Google Pay</li>
                  <li>Ci riserviamo il diritto di annullare ordini fraudolenti</li>
                  <li>In caso di indisponibilità, rimborseremo l'importo versato</li>
                </ul>
              </section>

              <Separator className="bg-gold-primary/30" />

              <section>
                <h2 className="text-2xl font-display text-golden mb-4">4. Spedizione e Consegna</h2>
                <ul className="list-disc list-inside space-y-2 text-white/70">
                  <li>Spediamo solo in Italia</li>
                  <li>I tempi di consegna sono indicativi: 2-5 giorni lavorativi</li>
                  <li>La spedizione è gratuita per ordini superiori a €50</li>
                  <li>Il rischio di trasporto passa al cliente al momento della consegna</li>
                  <li>È necessaria la presenza di un maggiorenne alla consegna</li>
                </ul>
              </section>

              <Separator className="bg-gold-primary/30" />

              <section>
                <h2 className="text-2xl font-display text-golden mb-4">5. Diritto di Recesso</h2>
                <p className="text-white/80 mb-4">
                  In conformità al Codice del Consumo, il diritto di recesso non si applica 
                  ai prodotti alimentari e alle bevande per motivi igienico-sanitari, 
                  salvo in caso di:
                </p>
                <ul className="list-disc list-inside space-y-2 text-white/70">
                  <li>Prodotti difettosi o danneggiati</li>
                  <li>Errore nella spedizione</li>
                  <li>Prodotti non conformi all'ordine</li>
                </ul>
              </section>

              <Separator className="bg-gold-primary/30" />

              <section>
                <h2 className="text-2xl font-display text-golden mb-4">6. Garanzie e Responsabilità</h2>
                <ul className="list-disc list-inside space-y-2 text-white/70">
                  <li>Garantiamo la qualità dei nostri prodotti</li>
                  <li>Seguiamo tutti gli standard igienico-sanitari</li>
                  <li>La nostra responsabilità è limitata al valore dell'ordine</li>
                  <li>Non siamo responsabili per usi impropri dei prodotti</li>
                  <li>Escludiamo responsabilità per danni indiretti</li>
                </ul>
              </section>

              <Separator className="bg-gold-primary/30" />

              <section>
                <h2 className="text-2xl font-display text-golden mb-4">7. Età e Responsabilità</h2>
                <p className="text-white/80 mb-4">
                  I nostri prodotti sono destinati esclusivamente a maggiorenni:
                </p>
                <ul className="list-disc list-inside space-y-2 text-white/70">
                  <li>È vietata la vendita a minori di 18 anni</li>
                  <li>Raccomandiamo un consumo responsabile</li>
                  <li>Non consumare in gravidanza o allattamento</li>
                  <li>Non guidare dopo aver consumato alcol</li>
                  <li>Rispettare le dosi consigliate</li>
                </ul>
              </section>

              <Separator className="bg-gold-primary/30" />

              <section>
                <h2 className="text-2xl font-display text-golden mb-4">8. Proprietà Intellettuale</h2>
                <p className="text-white/80">
                  Tutti i contenuti del sito (testi, immagini, loghi, design) sono protetti 
                  da copyright e marchi registrati. È vietata la riproduzione non autorizzata.
                </p>
              </section>

              <Separator className="bg-gold-primary/30" />

              <section>
                <h2 className="text-2xl font-display text-golden mb-4">9. Modifica dei Termini</h2>
                <p className="text-white/80">
                  Ci riserviamo il diritto di modificare questi termini in qualsiasi momento. 
                  Le modifiche saranno pubblicate su questa pagina e avranno effetto immediato.
                </p>
              </section>

              <Separator className="bg-gold-primary/30" />

              <section>
                <h2 className="text-2xl font-display text-golden mb-4">10. Legge Applicabile e Foro</h2>
                <p className="text-white/80">
                  Questi termini sono regolati dalla legge italiana. Per qualsiasi controversia 
                  è competente il Foro di Roma.
                </p>
                <p className="text-white/60 mt-4 text-sm">
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
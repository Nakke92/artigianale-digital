import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function Privacy() {
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
                Informativa Privacy
              </h1>
              <p className="text-xl text-white/90">
                La tua privacy è importante per noi
              </p>
            </div>
          </div>

          <Card className="bg-black/40 backdrop-blur-sm border border-gold-primary/30 hover:border-gold-primary/50 transition-all duration-300">
            <CardContent className="p-8 space-y-8">
              <section>
                <h2 className="text-2xl font-display text-golden mb-4">1. Titolare del Trattamento</h2>
                <p className="text-white/80">
                  Il Titolare del trattamento dei dati è Golden Shower Brewery S.r.l., 
                  con sede in Via della Birra Artigianale, 42 - 00100 Roma (RM), 
                  P.IVA: 12345678901, email: privacy@goldenshower.beer
                </p>
              </section>

              <Separator className="bg-gold-primary/30" />

              <section>
                <h2 className="text-2xl font-display text-golden mb-4">2. Tipi di Dati Raccolti</h2>
                <p className="text-white/80 mb-4">
                  Raccogliamo i seguenti tipi di dati personali:
                </p>
                <ul className="list-disc list-inside space-y-2 text-white/70">
                  <li><strong className="text-red-intense">Dati di registrazione:</strong> nome, cognome, email, data di nascita</li>
                  <li><strong className="text-red-intense">Dati di fatturazione:</strong> indirizzo, codice fiscale, partita IVA</li>
                  <li><strong className="text-red-intense">Dati di spedizione:</strong> indirizzo di consegna, numero di telefono</li>
                  <li><strong className="text-red-intense">Dati di navigazione:</strong> cookie, IP, pagine visitate</li>
                  <li><strong className="text-red-intense">Dati di pagamento:</strong> gestiti da Stripe, non conserviamo dati delle carte</li>
                </ul>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-display text-psychedelic mb-4">3. Finalità del Trattamento</h2>
                <p className="text-muted-foreground mb-4">
                  I tuoi dati vengono trattati per le seguenti finalità:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Gestione degli ordini e spedizioni</li>
                  <li>Fatturazione e adempimenti fiscali</li>
                  <li>Assistenza clienti</li>
                  <li>Marketing diretto (solo con consenso)</li>
                  <li>Miglioramento del servizio e analisi statistiche</li>
                  <li>Adempimenti di legge</li>
                </ul>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-display text-psychedelic mb-4">4. Base Giuridica</h2>
                <p className="text-muted-foreground">
                  Il trattamento dei dati si basa su: esecuzione del contratto di vendita, 
                  adempimento di obblighi legali, consenso per finalità di marketing, 
                  legittimo interesse per migliorare i nostri servizi.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-display text-psychedelic mb-4">5. Condivisione dei Dati</h2>
                <p className="text-muted-foreground mb-4">
                  I tuoi dati possono essere condivisi con:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Corrieri per la spedizione degli ordini</li>
                  <li>Stripe per l'elaborazione dei pagamenti</li>
                  <li>Consulenti fiscali e commercialisti</li>
                  <li>Autorità competenti quando richiesto dalla legge</li>
                </ul>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-display text-psychedelic mb-4">6. Conservazione dei Dati</h2>
                <p className="text-muted-foreground">
                  I dati vengono conservati per il tempo strettamente necessario alle finalità 
                  per cui sono stati raccolti, e comunque non oltre 10 anni dalla cessazione 
                  del rapporto commerciale, salvo obblighi di legge che richiedano una 
                  conservazione più lunga.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-display text-psychedelic mb-4">7. I Tuoi Diritti</h2>
                <p className="text-muted-foreground mb-4">
                  Ai sensi del GDPR, hai diritto a:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Accedere ai tuoi dati personali</li>
                  <li>Rettificare dati inesatti o incompleti</li>
                  <li>Cancellare i tuoi dati (diritto all'oblio)</li>
                  <li>Limitare il trattamento</li>
                  <li>Portabilità dei dati</li>
                  <li>Opporti al trattamento</li>
                  <li>Revocare il consenso</li>
                  <li>Presentare reclamo al Garante Privacy</li>
                </ul>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-display text-psychedelic mb-4">8. Sicurezza</h2>
                <p className="text-muted-foreground">
                  Adottiamo misure tecniche e organizzative appropriate per proteggere 
                  i tuoi dati da accessi non autorizzati, perdita, distruzione o 
                  divulgazione accidentale.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-display text-psychedelic mb-4">9. Minori</h2>
                <p className="text-muted-foreground">
                  I nostri servizi sono rivolti a persone maggiorenni. Non raccogliamo 
                  consapevolmente dati di minori di 18 anni.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-display text-psychedelic mb-4">10. Contatti</h2>
                <p className="text-muted-foreground">
                  Per esercitare i tuoi diritti o per qualsiasi domanda sulla privacy, 
                  contattaci a: privacy@goldenshower.beer
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
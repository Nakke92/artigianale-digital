import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <section className="max-w-4xl mx-auto">
          <div className="text-center py-16 relative">
            <div className="absolute inset-0 retro-dots opacity-20"></div>
            <div className="relative z-10">
              <h1 className="text-4xl md:text-6xl font-display text-psychedelic mb-6">
                Informativa Privacy
              </h1>
              <p className="text-xl text-muted-foreground">
                La tua privacy è importante per noi
              </p>
            </div>
          </div>

          <Card className="card-psychedelic">
            <CardContent className="p-8 space-y-8">
              <section>
                <h2 className="text-2xl font-display text-psychedelic mb-4">1. Titolare del Trattamento</h2>
                <p className="text-muted-foreground">
                  Il Titolare del trattamento dei dati è Golden Shower Brewery S.r.l., 
                  con sede in Via della Birra Artigianale, 42 - 00100 Roma (RM), 
                  P.IVA: 12345678901, email: privacy@goldenshower.beer
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-display text-psychedelic mb-4">2. Tipi di Dati Raccolti</h2>
                <p className="text-muted-foreground mb-4">
                  Raccogliamo i seguenti tipi di dati personali:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><strong>Dati di registrazione:</strong> nome, cognome, email, data di nascita</li>
                  <li><strong>Dati di fatturazione:</strong> indirizzo, codice fiscale, partita IVA</li>
                  <li><strong>Dati di spedizione:</strong> indirizzo di consegna, numero di telefono</li>
                  <li><strong>Dati di navigazione:</strong> cookie, IP, pagine visitate</li>
                  <li><strong>Dati di pagamento:</strong> gestiti da Stripe, non conserviamo dati delle carte</li>
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
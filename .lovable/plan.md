
# Brochure Tri-Fold "Golden Shower Brewery"

Realizzo un **PDF stampabile A4 orizzontale piega a 3 ante** (2 facciate = 6 pannelli), coerente con l'identità del brand: nero metallizzato, oro, ambra, rosso intenso, tipografia Anton + Lora, atmosfera cinematografica.

Il file finale sarà scaricabile da `/mnt/documents/golden-shower-brochure.pdf` (potrai poi decidere se linkarlo anche nel sito).

## Struttura della brochure

**Facciata esterna (quando aperta)**

```text
┌──────────────┬──────────────┬──────────────┐
│  Pannello 3  │  Pannello 4  │  Pannello 1  │
│  Contatti    │  Retro       │  COPERTINA   │
│  + QR + logo │  filosofia   │  bottiglie   │
└──────────────┴──────────────┴──────────────┘
```

**Facciata interna (quando aperta)**

```text
┌──────────────┬──────────────┬──────────────┐
│  Pannello 2  │  Pannello 5  │  Pannello 6  │
│  Chi siamo   │  Le birre    │  Le birre    │
│  + icone     │  Golden +    │  Red Head    │
│  malto/lupp. │  Trinidad    │  + filosofia │
└──────────────┴──────────────┴──────────────┘
```

Ogni pannello = 99 mm × 210 mm, margini stretti (8 mm), bleed 3 mm, linee di piega guida (solo per taglio, non stampate nella versione finale).

## Contenuti per pannello

**Pannello 1 – Copertina**
- Logo "GOLDEN SHOWER BREWERY" in oro Anton
- Titolo: *NON PRODUCIAMO SOLO BIRRA. PRODUCIAMO STORIE DA BERE.*
- Sottotitolo: *Ogni ricetta nasce da una personalità, prende forma con ingredienti selezionati e diventa una birra capace di raccontare una storia.*
- Immagine hero: bottiglie in still-life cinematografico su fondo nero con luce ambrata laterale

**Pannello 2 – Chi Siamo**
- Titolo "IL BIRRIFICIO"
- Testo breve su Staffoli, produzione artigianale, piccoli lotti, ricerca, passione
- 4 icone dorate minimali con label: **Malto · Luppolo · Lievito · Produzione**
- Firma: *Nicolò Boschi & Lorenzo Paolicchi*

**Pannello 5 – Le Nostre Birre (1/2)**
Card verticali con etichetta stilizzata, per ciascuna:
- **GOLDEN SHOWER** — DDH IPA · 4,2% · Fresca, agrumata, tropicale, beverina
- **TRINIDAD BASTARD** — Tripel Belga · 8,4% · Intensa, speziata, corposa, calda
Per ogni birra: barre visive di **amaro / corpo / colore**, profilo aromatico, **abbinamenti gastronomici**.

**Pannello 6 – Le Nostre Birre (2/2) + Filosofia**
- **RED HEAD** — Raspberry Red IPA · 6,2% · Lampone, equilibrio dolce/amaro, finale persistente + abbinamenti
- Block "LA NOSTRA FILOSOFIA": *Ogni birra nasce prima come un personaggio e poi come una ricetta. Le etichette raccontano storie ironiche, provocatorie e memorabili.*

**Pannello 4 – Retro (visibile a brochure chiusa, sul lato posteriore)**
- Immagine full-bleed atmosferica (botti, luppolo, luce calda)
- Claim in oro: *LE STORIE MIGLIORI INIZIANO DAVANTI A UNA BUONA BIRRA.*

**Pannello 3 – Contatti (aletta ripiegabile)**
- Logo compatto
- Sito: goldenshower.beer
- Instagram / Facebook: @goldenshower.brewery
- Email: info@goldenshower.beer
- Telefoni: Nicolò 348 072 0786 · Lorenzo 340 648 9563
- Sede: Staffoli (PI), Toscana
- **QR code** che punta a `https://goldenshower.lovable.app`
- Avviso legale piccolo: *Bevi responsabilmente — Vietato ai minori di 18 anni*

## Direzione visiva

- Sfondo nero profondo con texture sottile (grana + gradiente radiale ambra/rame ai bordi dei pannelli)
- Palette: `#000000`, `#0d0d0d`, `#FFD700` oro, `#B87333` rame, `#FFA500` ambra, `#C41E3A` rosso intenso
- Tipografia: **Anton** (titoli, uppercase), **Lora** (corpo, serif elegante), **IBM Plex Mono** per dati tecnici (ABV, IBU)
- Regoli decorativi sottili in oro, badge stile "etichetta di birra" per i nomi
- Foto still-life realistiche: bottiglie con condensa, bicchieri con schiuma, spighe d'orzo, luppolo fresco, botti di legno — illuminate laterale calda, tipo catalogo distilleria premium
- Nessuna clipart, nessun elemento aziendale generico, nessuna emoji

## Dettagli tecnici

- Generazione via **ReportLab** (Python) con font TTF (Anton, Lora, IBM Plex Mono) e immagini generate ad hoc con imagegen
- Formato pagina: **A4 landscape (297 × 210 mm)**, 2 pagine (esterno + interno)
- Colori RGB (ottimizzato per stampa digitale e visualizzazione digitale — hai indicato uso digitale)
- QR code generato con la libreria `qrcode`
- Immagini a 150 DPI, still-life e texture generati come JPG
- QA obbligatorio: converto ogni pagina in JPG e la ispeziono per overflow, sovrapposizioni, allineamento pieghe, contrasto testi — itero finché è impeccabile
- Output: `/mnt/documents/golden-shower-brochure.pdf` con anteprima `<presentation-artifact>` per scaricarlo

## Nota sui contenuti

Le tre birre che hai indicato includono **Trinidad Bastard** (Tripel Belga), che al momento non è nel catalogo del sito (dove c'è invece "Bella Negra"). Nella brochure userò esattamente le birre e i dati che hai specificato nel messaggio. Se vuoi, in un secondo momento posso allineare anche il catalogo del sito.

## Cosa NON faccio in questo task

- Non aggiungo route `/brochure` nel sito (hai scelto solo PDF)
- Non modifico il database dei prodotti
- Non tocco altre pagine del sito

Quando approvi, procedo con la generazione e ti restituisco il PDF pronto da scaricare.

# Rinomina del birrificio in "Birreria LI-DO"

Il marchio passa da "Golden Shower Brewery" a **Birreria LI-DO** in tutte le sezioni del sito. I nomi delle birre (Golden Shower IPA, Red Head IPA, Bella Negra IPA) restano invariati. La brochure non viene toccata.

## Cosa cambia

**Header e Footer**
- Logo testuale e titoli: "Birreria LI-DO"
- Copyright footer: "© 2024 Birreria LI-DO. Tutti i diritti riservati."

**Pagine**
- Chi Siamo: titolo, "Birrificio Birreria LI-DO", riferimenti nel racconto del marchio
- Contatti: nome birrificio, email, link social
- FAQ: riferimenti al birrificio (le domande sulle birre mantengono i nomi prodotto)
- Newsletter: "Newsletter Birreria LI-DO", messaggi di conferma e disclaimer
- Blog: intro "storie dal mondo Birreria LI-DO" (i titoli degli articoli restano)
- Privacy e Termini: ragione sociale "Birreria LI-DO S.r.l.", email privacy
- Admin: intestazione e valori di default delle impostazioni azienda
- Home: sezione "Perché Scegliere Birreria LI-DO"

**Contatti e social (nuovo dominio)**
- `info@goldenshower.beer` → `info@birrerialido.it`
- `privacy@goldenshower.beer` → `privacy@birrerialido.it`
- Instagram/Facebook: `goldenshowerbeer` → `birrerialido`

**SEO / metadati (index.html)**
- `<title>`: "Birreria LI-DO – Birra Artigianale Audace | Sapori Irriverenti"
- meta description, author, og:title, og:site_name e dati strutturati JSON-LD aggiornati

## Note tecniche

- Restano invariati: nomi prodotto nel database, asset immagine, classi CSS e token di design (`gold-primary`, palette oro/nero), URL di preview/pubblicazione.
- `ProductCard.tsx` usa `product.name.includes('Golden Shower')` per lo styling per-birra: quella logica resta com'è, perché riferita alla birra e non al birrificio.
- Il dominio email è un'ipotesi coerente col nuovo nome; se ne hai uno reale diverso lo sostituisco.

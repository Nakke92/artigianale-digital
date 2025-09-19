-- Clear existing products and add the new catalog
DELETE FROM products;

-- Insert the three new beers
INSERT INTO products (name, description, price, image_url, abv, ibu, style, is_active) VALUES
(
  'Golden Shower IPA',
  'Non la bevi per ubriacarti, ma per ridere, per condividere, per goderti un getto di loquace freschezza che ti sorprende ad ogni sorso. Una IPA dorata, fresca e fruttata, provocatoria come il nome che porta.',
  8.50,
  '/src/assets/golden-shower-new.jpeg',
  6.5,
  45,
  'IPA',
  true
),
(
  'Red Head IPA',
  'Una rossa tutta pepe che ti accende i sensi. Speziata e seducente, con note di caramello e frutta rossa che esplodono in bocca come un bacio proibito.',
  8.50,
  '/src/assets/red-head-new.jpeg',
  6.8,
  50,
  'IPA',
  true
),
(
  'Bella Negra IPA',
  'La regina della notte, vellutata e intrigante come un incontro proibito. Scura, cremosa ed elegante, nasconde segreti che solo i palati più audaci sapranno scoprire.',
  8.50,
  null,
  7.2,
  55,
  'IPA',
  true
);
-- Aggiorna le immagini delle birre con i path corretti
UPDATE products 
SET image_url = '/src/assets/bella-negra-new.jpeg' 
WHERE name = 'Bella Negra IPA' AND image_url IS NULL;

-- Verifica che tutte le birre abbiano un'immagine
UPDATE products 
SET image_url = '/src/assets/golden-shower-new.jpeg' 
WHERE name = 'Golden Shower IPA' AND (image_url IS NULL OR image_url = '');

UPDATE products 
SET image_url = '/src/assets/red-head-new.jpeg' 
WHERE name = 'Red Head IPA' AND (image_url IS NULL OR image_url = '');
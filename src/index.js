import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import schema from './schema.json';
import uischema from './uischema.json';
import { createJsonFormsStore } from './store';

const translations = {
  'en-US': {
    name: 'Name',
    description: 'Description',
    secondHand: 'Second hand',
    numberOfPages: 'Number of pages',
    author: 'Author',
    publisher: 'Publisher',
    language: 'Language',
    ISBNnumber: 'ISBN number',
    ageRestriction: 'Age restriction',
    size: 'Size',
    color: 'Color',
    material: 'Material',
    sleeves: 'Sleeves',
    collarShape: 'Collar shape',
    washingNotes: 'Washing notes',
    price: 'Price',
    shippingPrice: 'Shipping price',
    generalDiscount: 'General discount',
    discountWithPromotionCode: 'Discount with promotion code',
    deliverableOn: 'Deliverable on',
    deliveryOptions: 'Delivery options',
    internationalShipping: 'International shipping',
    soldOut: 'Sold out',
    itemsInStock: 'Items in stock',
    brand: 'Brand',
    bestBefore: 'Best before',
    producedOn: 'Produced on',
    EANCode: 'EAN code',
    weight: 'Weight',
    weightIncludingPackaging: 'Weight including packaging',
    isPublished: 'Is published',
    numberOfViews: 'Number of views',
    onlineSince: 'Online since',
    lastModifiedOn: 'Last modified on',
    auctionStarts: 'Auction starts',
    auctionEnds: 'Auction ends',
    numberOfBidders: 'Number of bidders',
    secondHandDescription: 'Whether this item is second-hand or new'
  },
  'de-DE': {
    name: 'Name',
    description: 'Beschreibung',
    secondHand: 'Gebraucht',
    numberOfPages: 'Anzahl der Seiten',
    author: 'Autor',
    publisher: 'Verlag',
    language: 'Sprache',
    ISBNnumber: 'ISBN-Nummer',
    ageRestriction: 'Altersbeschränkung',
    size: 'Größe',
    color: 'Farbe',
    material: 'Material',
    sleeves: 'Ärmel',
    collarShape: 'Kragenform',
    washingNotes: 'Waschhinweise',
    price: 'Preis',
    shippingPrice: 'Versandkosten',
    generalDiscount: 'Allgemeiner Rabatt',
    discountWithPromotionCode: 'Rabatt mit Gutscheincode',
    deliverableOn: 'Lieferbar am',
    deliveryOptions: 'Lieferoptionen',
    internationalShipping: 'Internationale Lieferung',
    soldOut: 'Ausverkauft',
    itemsInStock: 'Stückzahl auf Lager',
    brand: 'Marke',
    bestBefore: 'Mindestens haltbar bis',
    producedOn: 'Hergestellt am',
    EANCode: 'EAN-Code',
    weight: 'Gewicht',
    weightIncludingPackaging: 'Gewicht inkl. Verpackung',
    isPublished: 'Veröffentlicht',
    numberOfViews: 'Anzahl der Seitenaufrufe',
    onlineSince: 'Online seit',
    lastModifiedOn: 'Zuletzt bearbeitet am',
    auctionStarts: 'Auktion beginnt am',
    auctionEnds: 'Auktion endet am',
    numberOfBidders: 'Anzahl der Gebote',
    secondHandDescription: 'Ob dieser Artikel gebraucht oder neu ist'
  }
};

const initialState = {
  data: {
  },
  schema: schema,
  uischema: uischema,
  translations: translations
};
const store = createJsonFormsStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'));

registerServiceWorker();

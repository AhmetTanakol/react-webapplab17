import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import schema from './schema.json';
import uischema from './uischema.json';
import { initJsonFormsStore } from '@jsonforms/core';

const store = initJsonFormsStore({
  name: 'Cool Shirt',
  bestBefore: '2019-04-01T00:00:00+00:00',
  size: 'M',
  color: 'grey',
  itemsInStock: 9,
  auctionEnds: '2018-02-19T22:14:51+00:00',
  numberOfBidders: 6,
  description: 'All cool nerds wear this shirt.',
  isPublished: true,
  auctionStarts: '2018-02-15T10:02:19+00:00',
  EANCode: '7612345678900',
  author: 'Erika Mustermann',
  numberOfPages: 314,
  price: '8.99',
  deliverableOn: '2018-02-15T00:00:00+00:00',
  ISBNnumber: '978-3-16-148410-0',
  language: 'German',
  publisher: 'TUM',
  material: 'silk',
  deliveryOptions: 'express',
  brand: 'GreatShirts',
  internationalShipping: false,
  soldOut: false,
  sleeves: 'long',
  secondHand: true,
  collarShape: 'round',
  onlineSince: '2017-11-01T12:45:00+00:00',
  producedOn: '2016-05-14T00:00:00+00:00',
  ageRestriction: 16,
  weight: 1.2,
  weightIncludingPackaging: 1.3,
  lastModifiedOn: '2018-02-14T17:38:46+00:00',
  shippingPrice: '2.99',
  generalDiscount: 0.1,
  discountWithPromotionCode: 0.3,
  numberOfViews: 327,
  washingNotes: 'Wash at max 40° C'
}, schema, uischema);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'));

registerServiceWorker();
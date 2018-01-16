import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import schema from './schema.json';
import uischema from './uischema.json';
import { initJsonFormsStore } from '@jsonforms/core';

const translations = {
  'en-US': {
    firstname: 'First Name',
    lastname: 'Last Name',
    streetnumber: 'Street Number',
    postalcode: 'Postal Code',
    age: 'Age',
    dateofbirth: 'Date Of Birth',
    dateandtimeofparty: 'Date and Time of Party',
    timeofarrival: 'Time of Arrival',
    height: 'Height',
    gender: 'Gender',
    rating: 'Rating',
    committer: 'Committer',
    weight: 'Weight',
    drivingskill: 'Driving Skill',
    street: 'Street',
    city: 'City'
  },
  'de-DE': {
    firstname: 'Vorname',
    lastname: 'Name',
    streetnumber: 'Hausnummer',
    postalcode: 'Postleitzahl',
    age: 'Alter',
    dateofbirth: 'Geburtsdatum',
    dateandtimeofparty: 'Datum und Uhrzeit der Party',
    timeofarrival: 'Ankunftszeit',
    height: 'Höhe',
    gender: 'Geschlecht',
    rating: 'Bewertung',
    committer: 'Vermittler',
    weight: 'Gewicht',
    drivingskill: 'Fahrkünste',
    street: 'Strasse',
    city: 'Stadt'
  }
};

const store = initJsonFormsStore({
  firstName: "Max",
  personalData: {}
}, schema, uischema, translations);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'));

registerServiceWorker();

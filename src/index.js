import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import schema from './schema.json';
import uischema from './uischema.json';
import { initJsonFormsStore } from 'jsonforms-inferno/dist/ts-build/store';
import { registerRenderer } from 'jsonforms-inferno/dist/ts-build/actions';
import RatingControl, { ratingControlTester } from "./rating.control";
import { materialize } from 'jsonforms-inferno/dist/ts-build/renderers/materialized';

const store = initJsonFormsStore({
  personalData: {},
  address: {}
}, schema, uischema);

materialize();

// Custom control registration
store.dispatch(registerRenderer(ratingControlTester, RatingControl));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'));

registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import schema from './schema.json';
import uischema from './uischema.json';
import { initJsonFormsStore } from 'jsonforms-core/dist/ts-build/store';
import { materialize } from 'jsonforms-materialized/dist/ts-build';

const store = initJsonFormsStore({
  firstName: "Max",
  personalData: {}
}, schema, uischema);

materialize();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'));

registerServiceWorker();

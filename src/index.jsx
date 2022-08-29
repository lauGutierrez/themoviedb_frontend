import React from 'react';
import * as ReactDOMClient from 'react-dom/client';

import './css/app.scss';

import { Provider } from 'react-redux';

import store from './services/redux/stores/store.js';
import FilmixApp from './components/app/FilmixApp';


const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

root.render(
  <Provider store={store}>
    <FilmixApp />
  </Provider>
);

import React, { Suspense } from 'react';
import * as ReactDOMClient from 'react-dom/client';

import './css/app.scss';

import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";

import store from './services/redux/stores/store.js';
import FilmixApp from './components/MoviesView/MoviesView';
import LoadingState from './components/LoadingState/LoadingState';

// eslint-disable-next-line
import i18n from './i18n/i18n';

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

root.render(
  <React.StrictMode>
    
      <Provider store={store}>
      <BrowserRouter>
          <Suspense fallback={<LoadingState />}>
            <FilmixApp />
          </Suspense>
        </BrowserRouter>
      </Provider>
  </React.StrictMode>
);

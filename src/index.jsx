import './css/app.scss';

import React, { Suspense } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import FilmixApp from './components/MoviesView/MoviesView';
import { Provider } from 'react-redux';
import store from './services/redux/stores/store.js';

import LoadingState from './components/LoadingState/LoadingState';

// eslint-disable-next-line
import i18n from './i18n/i18n';

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

root.render(
  <React.StrictMode>
    <Suspense fallback={<LoadingState />}>
      <Provider store={store}>
        <FilmixApp />
      </Provider>
    </Suspense>
  </React.StrictMode>
);

import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import reducer from '../services/redux/reducers/reducer.js';

const renderWithProviders = (children) => {
  return render(
    <Provider store={configureStore({ reducer: reducer })}>
      {children}
    </Provider>
  );
};

export {
  renderWithProviders
};

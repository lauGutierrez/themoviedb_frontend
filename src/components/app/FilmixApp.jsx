import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import { MOVIE_ENDPOINT, TV_ENDPOINT } from '../../const/moviesApi';
import paths from '../../router/paths';
import ItemsView from '../ItemsView/ItemsView';
import LoadingState from '../LoadingState/LoadingState';

// eslint-disable-next-line
import i18n from '../../i18n/i18n';

const FilmixApp = () => {

  const { ready } = useTranslation();

  const theme = createTheme({
    typography: {
      fontFamily: "Netflix Sans,Helvetica Neue,Helvetica,Arial,sans-serif"
    },
  });

  return (
    <ThemeProvider theme={theme}>
      {!ready ?
        (
          <LoadingState />
        ) :
        (
          <BrowserRouter>
            <Routes>
              <Route path={paths.movie} element={<ItemsView tab={MOVIE_ENDPOINT} />}></Route>
              <Route path={paths.tv} element={<ItemsView tab={TV_ENDPOINT} />}></Route>
              <Route path={paths.home} element={<ItemsView tab={MOVIE_ENDPOINT} />}></Route>
            </Routes>
          </BrowserRouter>
        )
      }
    </ThemeProvider>
  );
}

export default FilmixApp;

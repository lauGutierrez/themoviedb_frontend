import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Route, Routes } from "react-router-dom";

import { MOVIE_ENDPOINT, TV_ENDPOINT } from '../../const/moviesApi';
import paths from '../../router/paths';
import ItemsView from '../ItemsView/ItemsView';

const FilmixApp = () => {

  const theme = createTheme({
    typography: {
      fontFamily: "Netflix Sans,Helvetica Neue,Helvetica,Arial,sans-serif"
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path={paths.movie} element={<ItemsView tab={MOVIE_ENDPOINT} />}></Route>
        <Route path={paths.tv} element={<ItemsView tab={TV_ENDPOINT} />}></Route>
        <Route path={paths.home} element={<ItemsView tab={MOVIE_ENDPOINT} />}></Route>
      </Routes>
    </ThemeProvider>
  );
}

export default FilmixApp;

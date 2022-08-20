import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Route, Routes } from "react-router-dom";

import paths from '../../router/paths';

import MoviesView from '../MoviesView/MoviesView';

const FilmixApp = () => {

  const theme = createTheme({
    typography: {
      fontFamily: "Netflix Sans,Helvetica Neue,Helvetica,Arial,sans-serif"
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path={paths.home} element={<MoviesView />}></Route>
        <Route path={paths.movie} element={<MoviesView />}></Route>
        <Route path={paths.series} element={<MoviesView />}></Route>
      </Routes>
    </ThemeProvider>
  );
}

export default FilmixApp;

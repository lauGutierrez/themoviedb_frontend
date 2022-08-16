import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
      <Router>
        <Routes>
          <Route exact path={paths.home} element={<MoviesView />}></Route>
          <Route exact path={paths.movie} element={<MoviesView />}></Route>
          <Route exact path={paths.series} element={<MoviesView />}></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default FilmixApp;

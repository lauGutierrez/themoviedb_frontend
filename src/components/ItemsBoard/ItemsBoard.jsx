import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import './ItemsBoard.scss';

import { getByGenreAndSearch } from '../../services/wrappers/moviesApi';
import actions from '../../services/redux/actions/actions';
import ItemCard from '../ItemCard/ItemCard';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';

const ItemsBoard = () => {
  const items = useSelector(state => state.items.list);
  const genre = useSelector(state => state.items.genre);
  const query = useSelector(state => state.items.query);
  const page = useSelector(state => state.items.page);
  const loading = useSelector(state => state.items.loading);
  const visibleTab = useSelector(state => state.visibleTab);

  const dispatch = useDispatch();
  const { t } = useTranslation();

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting === true) {
        addItems();
      }
    },
    { threshold: [0.1] }
  );

  useEffect(() => {
    if (!loading && items && items.length > 0) {
      observer.observe(document.querySelector(".pagination-area"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  const addItems = async () => {
    let items = await getByGenreAndSearch(visibleTab, genre, query, page);
    if (items && items.length > 0) {
      dispatch(actions.itemsActions.addItems(items));
    }
  }

  const getHeading = () => {
    let heading = t('top-heading');

    if (genre) {
      heading = t('genre-heading');
    }
    if (query) {
      heading = t('search-heading');
    }
    return heading;
  }

  const getLoadingComponent = () => {
    return (
      <Grid className="height-100"
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={2}>
        {[...Array(12)].map((i, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={index}>
            <Skeleton variant="rounded" height={400} />
          </Grid>
        ))}
      </Grid>
    );
  }

  const getNoResultsComponent = () => {
    return (
      <Grid className="no-results"
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={5}>
          <Grid item xs={12}>
            <img className="powered-by-logo" src="/images/no-search-results.png" alt={t('no-results')} />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" component="span" sx={{ fontWeight: 'bold' }}>
              {t('no-results')}
            </Typography>
          </Grid>
      </Grid>
    );
  }

  const getFulfilledComponent = () => {
    return (
      <Grid container
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={1}>
        <Grid item xs={12}>
          <Typography variant="h5" component="span" sx={{ fontWeight: 'bold' }}>
            {getHeading()}
          </Typography>
        </Grid>
        {items && items.length !== 0 ?
          (
            <Grid className="height-100" container item
              xs={12}
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={2}>
              {items.map((i) => (
                <Grid item
                  xs={12} sm={6} md={4} lg={3} xl={2}
                  className="item-card-container"
                  key={i.id}>
                  <ItemCard
                    id={i.id}
                    title={i.title || i.name || t('no-title')}
                    overview={i.overview || t('no-overview')}
                    image={i.poster_path} />
                </Grid>
              ))}
            </Grid>
          )
          :
          null
        }
        <Grid item xs={12}>
          <div className="pagination-area"></div>
        </Grid>
      </Grid>
    );
  }

  const getComponent = () => {
    if (loading) {
      return getLoadingComponent();
    } else if (items && items.length == 0) {
      return getNoResultsComponent();
    } else {
      return getFulfilledComponent();
    }
  }

  return (
    <Box p={5} className="height-100">
      {getComponent()}
    </Box>
  );
}

export default ItemsBoard;

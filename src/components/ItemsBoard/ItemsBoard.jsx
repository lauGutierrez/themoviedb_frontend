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


const ItemsBoard = () => {
  const items = useSelector(state => state.items.list);
  const genre = useSelector(state => state.items.genre);
  const query = useSelector(state => state.items.query);
  const visibleTab = useSelector(state => state.visibleTab);
  const page = useSelector(state => state.items.page);

  const dispatch = useDispatch();
  const { t } = useTranslation();

  // const observer = new IntersectionObserver(
  //   (entries) => {
  //     if (entries[0].isIntersecting === true) {
  //       console.log('SI');
  //       addItems();
  //     } else {
  //       console.log('NO');
  //     }
  //   },
  //   { threshold: [0.1] }
  // );

  useEffect(() => {
    // observer.observe(document.querySelector(".pagination-area"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addItems = async () => {
    dispatch(actions.itemsActions.increaseCurrentPage());
    console.log('board genre', genre);
    console.log('board query', query);
    console.log('board page', page);
    let items = await getByGenreAndSearch(visibleTab, genre, query, page);
    dispatch(actions.itemsActions.addItems(items));
  }

  return (
    <Box p={5} className="height-100">
      <Grid container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={5}>
          {items && items.length !== 0 ?
            (
              <Grid className="items-board height-100" container item
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
    </Box>
  );
}

export default ItemsBoard;

import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ItemsBoard.scss';

import { getByGenre } from '../../services/wrappers/moviesApi';
import actions from '../../services/redux/actions/actions';
import ItemCard from '../ItemCard/ItemCard';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


const ItemsBoard = () => {
  const items = useSelector(state => state.items.list);
  const genre = useSelector(state => state.items.genre);
  const visibleTab = useSelector(state => state.visibleTab);
  const page = useSelector(state => state.items.page);
  const dispatch = useDispatch();

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting === true) {
        addItems();
      }
    },
    { threshold: [0] }
  );

  useEffect(() => {
    if (items && items.length !== 0) {
      observer.observe(document.querySelector(".pagination-area"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  const addItems = async () => {
    dispatch(actions.itemsActions.increaseCurrentPage());
    let items = await getByGenre(visibleTab, genre, page+1);
    dispatch(actions.itemsActions.addItems(items));
  }

  return (
    <Box p={5} className="height-100">
      {items && items.length !== 0 ?
        (
          <Grid container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={5}>
            <Grid className="items-board height-100" container item
              xs={12}
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={2}>
              {items.map((i) => (
                <Grid item
                  xs={12} sm={12} md={4} lg={3} xl={2}
                  className="item-card-container"
                  key={i.id}>
                  <ItemCard
                    id={i.id}
                    title={i.title}
                    overview={i.overview}
                    image={i.poster_path} />
                </Grid>
              ))}
            </Grid>
            <Grid item xs={12}>
              <div className="pagination-area"></div>
            </Grid>
          </Grid>
        )
        :
        null
      }
    </Box>
  );
}

export default ItemsBoard;

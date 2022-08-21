import React from 'react';
import { useSelector } from 'react-redux';

import ItemCard from '../ItemCard/ItemCard';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


const ItemsBoard = () => {
  const items = useSelector(state => state.items);
  return (
    <Box p={5}>
      {items && items.length !== 0 ?
        (
          <Grid container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={2}>
            {items.map((i) => (
              <Grid item xs={12} sm={12} md={4} lg={3} xl={2} key={i.id}>
                <ItemCard
                  id={i.id}
                  title={i.title}
                  overview={i.overview}
                  image={i.poster_path} />
              </Grid>
            ))}
          </Grid>
        )
        :
        null
      }
      
    </Box>
  );
}

export default ItemsBoard;

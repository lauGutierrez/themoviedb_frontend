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
            justifyContent="space-between"
            alignItems="center">
            {items.map((data) => (
              <Grid item xs={12} sm={12} md={4} lg={3} xl={2} key={data.id}>
                <ItemCard
                  id={data.id}
                  title={data.title}
                  overview={data.overview}
                  image={data.poster_path} />
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

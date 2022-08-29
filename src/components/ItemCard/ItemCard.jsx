import React from 'react';

import './ItemCard.scss';

import { IMAGES_URL } from '../../const/moviesApi';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';


const ItemCard = (props) => {

  const openCard = () => {
    props.openCb(
      props.id,
      props.title,
      props.overview,
      props.image
    );
  }

  return (
    <React.Fragment>
      <Card className="item-card" onClick={openCard}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="400"
            image={props.image ? IMAGES_URL + props.image : "/images/no-image-available.jpg"} />
        </CardActionArea>
      </Card>
    </React.Fragment>
  );
}

export default ItemCard;



import React from 'react';

import { IMAGES_URL } from '../../const/moviesApi';

import './ItemCardDetail.scss';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';


const ItemCardDetail = (props) => {
 
  const closeDetail = () => {
    props.closeCb();
  }

  return (
    <Drawer
      anchor="right"
      hideBackdrop={true}
      open={props.isOpened}
      onClick={closeDetail}>
      <Card className="height-100">
        <CardActionArea>
          <CardMedia
            component="img"
            height="400"
            image={props.image ? IMAGES_URL + props.image : "/images/no-image-available.jpg"} />
          <CardContent>
            <Typography className="item-card-detail-title" gutterBottom variant="h5" component="div">
              {props.title}
            </Typography>
            <Typography className="item-card-detail-overview" paragraph>
              {props.overview}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Drawer>
  );
}

export default ItemCardDetail;



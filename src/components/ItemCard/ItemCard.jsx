import React, { useState, useEffect } from 'react';

import './ItemCard.scss';

import { IMAGES_URL } from '../../const/moviesApi';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';


const ItemCard = (props) => {
  const [isVisibleOverview, setIsVisibleOverview] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    setIsVisibleOverview(isOpened);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpened]);

  return (
    <React.Fragment>
      <Card className="item-card" onClick={() => setIsOpened(true)}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="400"
            image={props.image ? IMAGES_URL + props.image : "/images/no-image-available.jpg"} />
        </CardActionArea>
      </Card>
      <Drawer
        anchor="right"
        open={isOpened}
        onClick={() => setIsOpened(false)}>
        <Card className="item-card-detail">
          <CardActionArea>
            <CardMedia
              component="img"
              height="400"
              image={props.image ? IMAGES_URL + props.image : "/images/no-image-available.jpg"} />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {props.title}
              </Typography>
            </CardContent>
            <Collapse in={isVisibleOverview} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>{props.overview}</Typography>
              </CardContent>
            </Collapse>
          </CardActionArea>
        </Card>
      </Drawer>
    </React.Fragment>
  );
}

export default ItemCard;



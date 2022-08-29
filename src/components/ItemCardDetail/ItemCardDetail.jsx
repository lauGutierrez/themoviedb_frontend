import React from 'react';

import { IMAGES_URL } from '../../const/moviesApi';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
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
            <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
              {props.title}
            </Typography>
            <Collapse in={props.isOpened} timeout="auto" unmountOnExit>
              <Typography paragraph>{props.overview}</Typography>
            </Collapse>
          </CardContent>
        </CardActionArea>
      </Card>
    </Drawer>
  );
}

export default ItemCardDetail;



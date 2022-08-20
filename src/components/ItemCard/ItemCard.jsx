import React, { useState } from 'react';

import './ItemCard.scss';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


const ItemCard = (props) => {
  const [fullCard, setFullCard] = useState(false);

  const showFullCard = () => {
    setFullCard(true);
  }

  const hideFullCard = () => {
    setFullCard(true);
  }
  console.log(props);

  return (
    <Card className="item-card"
      onMouseEnter={(event) => showFullCard()}
      onMouseLeave={(event) => hideFullCard()}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={props.image}/>
        {fullCard ? 
          (
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {props.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {props.overview}
              </Typography>
            </CardContent>
          ) :
          null
        }
        
      </CardActionArea>
    </Card>
  );
}

export default ItemCard;



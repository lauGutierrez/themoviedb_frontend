import React, { useState } from 'react';

import './ItemCard.scss';

import { IMAGES_URL } from '../../const/moviesApi';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


const ItemCard = (props) => {
  const [fullCard, setFullCard] = useState(false);
  const [isOverviewVisible, setIsOverviewVisible] = useState(false);

  const showFullCard = () => {
    setFullCard(true);
  }

  const hideFullCard = () => {
    setFullCard(false);
  }

  return (
    <Card className="item-card"
      onMouseEnter={(event) => showFullCard()}
      onMouseLeave={(event) => hideFullCard()}
      onClick={() => setIsOverviewVisible(!isOverviewVisible)}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image={props.image ? IMAGES_URL + props.image : "/images/no-image-available.jpg"}/>
        {fullCard ? 
          (
            <React.Fragment>
              <CardContent>
                <Grid container
                  direction="row"
                  justifyContent="flex-end">
                  <Grid item xs={8} sm={8} md={10} lg={11} xl={11}>
                    <Typography gutterBottom variant="h6" component="div">
                      {props.title}
                    </Typography>
                  </Grid>
                  <Grid item xs={4} sm={4} md={2} lg={1} xl={1} className="expand-more">
                    <ExpandMoreIcon
                      className={isOverviewVisible ? "rotate" : ""}/>
                  </Grid>
                </Grid>
              </CardContent>
              <Collapse in={isOverviewVisible} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>{props.overview}</Typography>
                </CardContent>
              </Collapse>
            </React.Fragment>
          ) :
          null
        }
        
      </CardActionArea>
    </Card>
  );
}

export default ItemCard;



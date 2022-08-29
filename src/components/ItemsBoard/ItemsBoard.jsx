import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import './ItemsBoard.scss';

import { getByGenreAndSearch } from '../../services/wrappers/moviesApi';
import actions from '../../services/redux/actions/actions';
import ItemCard from '../ItemCard/ItemCard';
import ScrollPaginator from '../ScrollPaginator/ScrollPaginator';
import ItemCardDetail from '../ItemCardDetail/ItemCardDetail';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ItemsBoard = () => {
  const items = useSelector(state => state.items.list);
  const genre = useSelector(state => state.items.genre);
  const query = useSelector(state => state.items.query);
  const page = useSelector(state => state.items.page);
  const loading = useSelector(state => state.items.loading);
  const visibleTab = useSelector(state => state.visibleTab);

  const [isCardOpened, setIsCardOpened] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState('');
  const [selectedOverview, setSelectedOverview] = useState('');
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedId, setSelectedId] = useState(null);

  const dispatch = useDispatch();
  const { t } = useTranslation();

  const addItems = async () => {
    let { result, total } = await getByGenreAndSearch(visibleTab, genre, query, page);
    dispatch(actions.itemsActions.addItems(result, total));
  }

  const showCardDetail = async (id, title, overview, image) => {
    if (selectedId !== null) {
      closeCardDetail();
    }
    setSelectedId(id);
    setSelectedTitle(title);
    setSelectedOverview(overview);
    setSelectedImage(image);
    setIsCardOpened(true);
  }

  const closeCardDetail = () => {
    setIsCardOpened(false);
    setSelectedId(null);
  }

  const onCardSelected = (id, title, overview, image) => {
    if (id === selectedId) {
      closeCardDetail();
    } else {
      showCardDetail(id, title, overview, image);
    }
  }

  const goBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const getHeading = () => {
    let heading = t('top-heading');

    if (genre) {
      heading = t('genre-heading');
    }
    if (query) {
      heading = t('search-heading');
    }
    return heading;
  }

  const getLoadingComponent = () => {
    goBackToTop();
    return (
      <Grid className="height-100"
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={2}>
        {[...Array(12)].map((i, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={index}>
            <Skeleton variant="rounded" height={400} />
          </Grid>
        ))}
      </Grid>
    );
  }

  const getNoResultsComponent = () => {
    goBackToTop();
    return (
      <Grid className="no-results"
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={5}>
          <Grid item xs={12}>
            <img className="powered-by-logo" src="/images/no-search-results.png" alt={t('no-results')} />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" component="span" sx={{ fontWeight: 'bold' }}>
              {t('no-results')}
            </Typography>
          </Grid>
      </Grid>
    );
  }

  const getFulfilledComponent = () => {
    return (
      <React.Fragment>
        {page > 2 ?
          (
            <Fab className="back-to-top-button" onClick={goBackToTop}>
              <KeyboardArrowUpIcon />
            </Fab>
          ) :
          null
        }
        <Grid container
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={1}>
          <Grid item xs={12}>
            <Typography variant="h5" component="span" sx={{ fontWeight: 'bold' }}>
              {getHeading()}
            </Typography>
          </Grid>
          {items && items.length !== 0 ?
            (
              <Grid className="height-100" container item
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
                      image={i.poster_path}
                      openCb={onCardSelected}/>
                  </Grid>
                ))}
              </Grid>
            )
            :
            null
          }
          <Grid item xs={12} className="width-100">
            <ScrollPaginator addItemsCb={addItems}/>
          </Grid>
        </Grid>
        <ItemCardDetail
          isOpened={isCardOpened}
          title={selectedTitle}
          overview={selectedOverview}
          image={selectedImage}
          closeCb={closeCardDetail} />
      </React.Fragment>
    );
  }

  const getComponent = () => {
    if (loading) {
      return getLoadingComponent();
    } else if (items && items.length === 0) {
      return getNoResultsComponent();
    } else {
      return getFulfilledComponent();
    }
  }

  return (
    <Box p={5} className="height-100">
      {getComponent()}
    </Box>
  );
}

export default ItemsBoard;

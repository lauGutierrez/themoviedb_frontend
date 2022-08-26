import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './Header.scss';

import { MOVIE_ENDPOINT, TV_ENDPOINT } from '../../const/moviesApi';
import paths from '../../router/paths';
import SearchBar from '../SearchBar/SearchBar';
import { getGenres, getByGenreAndSearch } from '../../services/wrappers/moviesApi';
import actions from '../../services/redux/actions/actions';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Collapse from '@mui/material/Collapse';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';

const Header = (props) => {
    const subheaderTimeout = 1000;
    const visibleTab = useSelector(state => state.visibleTab);
    const genre = useSelector(state => state.items.genre) || '';
    const query = useSelector(state => state.items.query) || '';

    const [genres, setGenres] = useState([]);
    const [isVisibleSubheader, setIsVisibleSubheader] = useState(false);

    const { t } = useTranslation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    

    useEffect(() => {
        setIsVisibleSubheader(true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (visibleTab) {
            dispatch(actions.itemsActions.resetItems());
            initGenres();
            addItems();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [visibleTab]);

    useEffect(() => {
        if (genre || query) {
            addItems();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [genre, query]);

    const initGenres = async () => {
        let genres = await getGenres(visibleTab);
        setGenres(genres);
    }

    const goToTab = (tab) => {
        let path = '';

        switch (tab) {
            case MOVIE_ENDPOINT:
                path = paths.movie;
                break;
            case TV_ENDPOINT:
                path = paths.tv;
                break;
            default:
                path = paths.movie;
        }
        dispatch(actions.visibleTabActions.setVisibleTab(tab));
        navigate(path);
    }

    const onChangeGenre = async (genre) => {
        dispatch(actions.itemsActions.setGenre(genre));
    }

    const onChangeSearch = async (searchQuery) => {
        dispatch(actions.itemsActions.setSearchQuery(searchQuery));
    }

    const addItems = async () => {
        let items = await getByGenreAndSearch(visibleTab, genre, query, 1);
        if (items && items.length > 0) {
            dispatch(actions.itemsActions.addItems(items));
        }
    }

    return (
        <AppBar position="static">
            <Toolbar>
                
                <Grid container
                    direction="column">
                    <Grid container
                        item xs={12}
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center">
                        <Grid item>
                            <Grid container
                                spacing={3}
                                direction="row"
                                justifyContent="flex-start"
                                alignItems="center">
                                <Grid item>
                                    <Box pt={2}>
                                        <Typography
                                            variant="h6"
                                            component="div"
                                            noWrap className="app-name">
                                                {t('app-name').toUpperCase()}
                                            </Typography>
                                    </Box>
                                </Grid>
                                <Grid item>
                                    <Box pt={2}>
                                        {[MOVIE_ENDPOINT, TV_ENDPOINT].map((tab) => (
                                            <Button
                                                className={visibleTab === tab ? 'selected' : 'not-selected'}
                                                key={tab}
                                                onClick={() => goToTab(tab)}>
                                                {t(tab)}
                                            </Button>
                                        ))}
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Box pt={2}>
                                <img className="powered-by-logo" src="/images/themoviedb_logo.svg" alt={t('powered-by-logo')} />
                            </Box>
                        </Grid>
                    </Grid>
                    <Collapse in={isVisibleSubheader} timeout={subheaderTimeout}>
                        <Grid container
                            item xs={12}
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center">
                            <Grid item>
                                <Grid container
                                    item xs={12}
                                    spacing={3}
                                    direction="row"
                                    justifyContent="flex-start"
                                    alignItems="center">
                                    <Grid item>
                                        <Box pt={2} pb={2}>
                                            <Typography
                                                variant="h4"
                                                component="div"
                                                noWrap>
                                                {t(visibleTab)}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item>
                                        <Box pt={2} pb={2}>
                                            <FormControl fullWidth className="genre-select">
                                                <InputLabel id="select-genre-label">{t('genre')}</InputLabel>
                                                <Select
                                                    labelId="select-genre-label"
                                                    id="select-genre"
                                                    value={genre}
                                                    label={t('genre')}
                                                    onChange={(event) => onChangeGenre(event.target.value)}>
                                                    {genres.map((genre) => (
                                                        <MenuItem key={genre.id} value={genre.id}>{genre.name}</MenuItem>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Box pt={2} pb={2}>
                                    <SearchBar
                                        label={t('search-cta')}
                                        placeholder={t('search-keys')}
                                        searchCb={(input) => onChangeSearch(input)} />
                                </Box>
                            </Grid>
                        </Grid>
                    </Collapse>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}
export default Header;
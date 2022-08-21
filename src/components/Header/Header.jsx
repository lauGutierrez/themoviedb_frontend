import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './Header.scss';

import { PAGES, MOVIES_PAGE, SERIES_PAGE } from '../../const/pages';
import paths from '../../router/paths';
import SearchBar from '../SearchBar/SearchBar';
import { getCategories, getMovies, getSeries } from '../../services/wrappers/moviesApi';
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
    const visiblePage = useSelector(state => state.visiblePage);
    const [category, setCategory] = useState('');
    const [categories, setCategories] = useState([]);
    const [isVisibleSubheader, setIsVisibleSubheader] = useState(false);

    const { t } = useTranslation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        setCategories(getCategories(visiblePage));
        setIsVisibleSubheader(true);
        setItems();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const goToPage = (page) => {
        let path = '';

        switch (page) {
            case MOVIES_PAGE:
                path = paths.movie;
                break;
            case SERIES_PAGE:
                path = paths.series;
                break;
            default:
                path = paths.movie;
        }
        navigate(path);
    }

    const setItems = async () => {
        let apiCall = null;

        switch (visiblePage) {
            case MOVIES_PAGE:
                apiCall = getMovies;
                break;
            case SERIES_PAGE:
                apiCall = getSeries;
                break;
            default:
                apiCall = getMovies;
        }

        let items = await apiCall({});
        dispatch(actions.itemsActions.resetItems());
        dispatch(actions.itemsActions.addItems(items));
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
                                        {PAGES.map((page) => (
                                            <Button
                                                className={visiblePage === page ? 'selected' : 'not-selected'}
                                                key={page}
                                                onClick={() => goToPage(page)}>
                                                {t(page)}
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
                                                {t(visiblePage)}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item>
                                        <Box pt={2} pb={2}>
                                            <FormControl fullWidth className="category-select">
                                                <InputLabel id="select-category-label">{t('category')}</InputLabel>
                                                <Select
                                                    labelId="select-category-label"
                                                    id="select-category"
                                                    value={category}
                                                    label={t('category')}
                                                    onChange={(event) => setCategory(event.target.value)}>
                                                    {categories.map((category) => (
                                                        <MenuItem key={category.id} value={category.id}>{category.name}</MenuItem>
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
                                        searchCb={(input) => console.log(input)} />
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
import {
    API_KEY,
    API_URL,
    API_VERSION,
    MOVIE_ENDPOINT,
    DISCOVER_ENDPOINT,
    TV_ENDPOINT,
    GENRE_ENDOINT,
    SEARCH_ENDOINT,
    LIST_ACTION,
    GENRES_KEY,
    RESULTS_KEY,
    POPULARITY_FILTER,
    GENRE_FILTER
} from '../../const/moviesApi';
import { getRequest } from '../api/api';

// eslint-disable-next-line
import i18n from '../../i18n/i18n';

const getGenres = async (tab) => {
    let genres = [];

    switch (tab) {
        case (MOVIE_ENDPOINT):
            genres = await getMoviesGenres();
            break;
        case (TV_ENDPOINT):
            genres = await getTVGenres();
            break;
        default:
            genres = await getMoviesGenres();
    }

    return genres;
}


const getMoviesGenres = async () => {
    let endpoint = `${GENRE_ENDOINT}/${MOVIE_ENDPOINT}/${LIST_ACTION}`;
    let genres = await get(endpoint, GENRES_KEY);

    return genres;
}

const getTVGenres = async () => {
    let endpoint = `${GENRE_ENDOINT}/${TV_ENDPOINT}/${LIST_ACTION}`;
    let genres = await get(endpoint, GENRES_KEY);

    return genres;
}

const getTop = async (tab, page) => {
    let top = [];

    switch (tab) {
        case (MOVIE_ENDPOINT):
            top = await getMoviesTop(page);
            break;
        case (TV_ENDPOINT):
            top = await getTVTop(page);
            break;
        default:
            top = await getMoviesTop(page);
    }

    return top;
}

const getMoviesTop = async (page) => {
    let endpoint = `${DISCOVER_ENDPOINT}/${MOVIE_ENDPOINT}`;
    let query = POPULARITY_FILTER;
    let top = await get(endpoint, RESULTS_KEY, query, page);

    return top;
}

const getTVTop = async (page) => {
    let endpoint = `${DISCOVER_ENDPOINT}/${TV_ENDPOINT}`;
    let query = POPULARITY_FILTER;
    let top = await get(endpoint, RESULTS_KEY, query, page);

    return top;
}

const getByGenre = async (tab, genre, page) => {
    let items = [];

    if (!genre) {
        items = await getTop(tab, page);
    } else {
        switch (tab) {
            case (MOVIE_ENDPOINT):
                items = await getMoviesByGenre(genre, page);
                break;
            case (TV_ENDPOINT):
                items = await getTVSeriesByGenre(genre, page);
                break;
            default:
                items = await getMoviesByGenre(genre, page);
        }
    }
    return items;
}

const getMoviesByGenre = async (genre, page) => {
    let endpoint = `${DISCOVER_ENDPOINT}/${MOVIE_ENDPOINT}`;
    let query = `${GENRE_FILTER}=${genre}&${POPULARITY_FILTER}`;
    let movies = await get(endpoint, RESULTS_KEY, query, page);

    return movies;
}

const getTVSeriesByGenre = async (genre, page) => {
    let endpoint = `${DISCOVER_ENDPOINT}/${TV_ENDPOINT}`;
    let query = `${GENRE_FILTER}=${genre}&${POPULARITY_FILTER}`;
    let series = await get(endpoint, RESULTS_KEY, query, page);

    return series;
}

const get = async (endpoint, key, query, page) => {
    
    let url = getUrl(endpoint, query, page);
    console.log(url);
    let result = await getRequest(url, key);

    return result;
}

const getUrl = (endpoint, query, page) => {
    let queryParameter = query ? `&${query}` : '';
    let pageParameter = page ? `$page=${page}` : ''; 
    let url = `${API_URL}/${API_VERSION}/${endpoint}?api_key=${API_KEY}${queryParameter}${pageParameter}&language=${i18n.language}`;

    return url;
}

export {
    getGenres,
    getByGenre
}
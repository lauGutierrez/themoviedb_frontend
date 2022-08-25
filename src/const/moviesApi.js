
/* --- URL --------------------------------- */
const API_KEY = 'c66df4da9796ccf8d24c250b978d2f46';
const API_URL = 'https://api.themoviedb.org';
const API_VERSION = 3;
const IMAGES_URL = 'https://image.tmdb.org/t/p/w500/';

/* --- ENDPOINTS --------------------------- */

const MOVIE_ENDPOINT = 'movie';
const TV_ENDPOINT = 'tv';
const GENRE_ENDOINT = 'genre';
const DISCOVER_ENDPOINT = 'discover';
const SEARCH_ENDPOINT = 'search';

/* --- ACTIONS ----------------------------- */

const LIST_ACTION = 'list';

/* --- RESPONSE KEYS ----------------------- */

const GENRES_KEY = 'genres';
const RESULTS_KEY = 'results';

/* --- FILTERS ----------------------------- */

const POPULARITY_FILTER = 'sort_by=popularity.desc';
const GENRE_FILTER = 'with_genres=';


export {
    API_KEY,
    API_URL,
    API_VERSION,
    MOVIE_ENDPOINT,
    DISCOVER_ENDPOINT,
    TV_ENDPOINT,
    GENRE_ENDOINT,
    LIST_ACTION,
    GENRES_KEY,
    RESULTS_KEY,
    POPULARITY_FILTER,
    GENRE_FILTER,
    IMAGES_URL,
    SEARCH_ENDPOINT
};
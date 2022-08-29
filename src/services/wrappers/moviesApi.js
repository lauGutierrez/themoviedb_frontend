import {
    API_KEY,
    API_URL,
    API_VERSION,
    MOVIE_ENDPOINT,
    DISCOVER_ENDPOINT,
    POPULAR_ENDPOINT,
    TV_ENDPOINT,
    GENRE_ENDOINT,
    SEARCH_ENDPOINT,
    LIST_ACTION,
    GENRES_KEY,
    RESULTS_KEY,
    POPULARITY_FILTER,
    GENRE_FILTER
} from '../../const/moviesApi';

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
            top = await getPopularMovies(page);
            break;
        case (TV_ENDPOINT):
            top = await getPopularTVSeries(page);
            break;
        default:
            top = await getPopularMovies(page);
    }

    return top;
}

const getPopularMovies = async (page) => {
    let endpoint = `${MOVIE_ENDPOINT}/${POPULAR_ENDPOINT}`;
    let query = '';
    let top = await get(endpoint, RESULTS_KEY, query, page);

    return top;
}

const getPopularTVSeries = async (page) => {
    let endpoint = `${TV_ENDPOINT}/${POPULAR_ENDPOINT}`;
    let query = '';
    let top = await get(endpoint, RESULTS_KEY, query, page);

    return top;
}

// const getMoviesOrderedByPopularity = async (page) => {
//     let endpoint = `${DISCOVER_ENDPOINT}/${MOVIE_ENDPOINT}`;
//     let query = POPULARITY_FILTER;
//     let top = await get(endpoint, RESULTS_KEY, query, page);

//     return top;
// }

// const getTVSeriesOrderedByPopularity = async (page) => {
//     let endpoint = `${DISCOVER_ENDPOINT}/${TV_ENDPOINT}`;
//     let query = POPULARITY_FILTER;
//     let top = await get(endpoint, RESULTS_KEY, query, page);

//     return top;
// }

const getByGenreAndSearch = async (tab, genre, searchQuery, page) => {
    let items = [];

    if (!genre && !searchQuery) {
        items = await getTop(tab, page);
    } else if (!searchQuery) {
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
    } else {
        switch (tab) {
            case (MOVIE_ENDPOINT):
                items = await getMoviesBySearch(genre, searchQuery, page);
                break;
            case (TV_ENDPOINT):
                items = await getTVSeriesBySearch(genre, searchQuery, page);
                break;
            default:
                items = await getMoviesBySearch(genre, searchQuery, page);
        }
    }
    return items;
}

const getMoviesByGenre = async (genre, page) => {
    let endpoint = `${DISCOVER_ENDPOINT}/${MOVIE_ENDPOINT}`;
    let query = `${GENRE_FILTER}${genre}&${POPULARITY_FILTER}`;
    let movies = await get(endpoint, RESULTS_KEY, query, page);

    return movies;
}

const getTVSeriesByGenre = async (genre, page) => {
    let endpoint = `${DISCOVER_ENDPOINT}/${TV_ENDPOINT}`;
    let query = `${GENRE_FILTER}${genre}&${POPULARITY_FILTER}`;
    let series = await get(endpoint, RESULTS_KEY, query, page);

    return series;
}

const getMoviesBySearch = async (genre, searchQuery, page) => {
    let endpoint = `${SEARCH_ENDPOINT}/${MOVIE_ENDPOINT}`;
    let queryParameter = `&query=${encodeURIComponent(searchQuery)}`;
    let query = `${POPULARITY_FILTER}${queryParameter}`;
    if (genre) {
        query = `${query}&${GENRE_FILTER}${genre}`;
    }
    let movies = await get(endpoint, RESULTS_KEY, query, page);

    return movies;
}

const getTVSeriesBySearch = async (genre, searchQuery, page) => {
    let endpoint = `${SEARCH_ENDPOINT}/${TV_ENDPOINT}`;
    let queryParameter = `&query=${encodeURIComponent(searchQuery)}`;
    let query = `${POPULARITY_FILTER}${queryParameter}`;
    if (genre) {
        query = `${query}&${GENRE_FILTER}${genre}`;
    }
    let series = await get(endpoint, RESULTS_KEY, query, page);

    return series;
}

const get = async (endpoint, key, query, page) => {
    let url = getUrl(endpoint, query, page);
    console.log(url);
    let response = await fetch(url);
    let data = await response.json();

    let result = {
        'result': key ? data[key] : data,
        'total': data['total_results']
    };
    return result;
}

const getUrl = (endpoint, query, page) => {
    let queryParameter = query ? `&${query}` : '';
    let pageParameter = page ? `&page=${page}` : ''; 
    let url = `${API_URL}/${API_VERSION}/${endpoint}?api_key=${API_KEY}${queryParameter}${pageParameter}&language=${i18n.language}`;

    return url;
}

export {
    getGenres,
    getByGenreAndSearch
}
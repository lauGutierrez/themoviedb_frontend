import {
    API_KEY,
    API_URL,
    API_VERSION,
    MOVIE_ENDPOINT,
    TV_ENDPOINT,
    GENRE_ENDOINT,
    LIST_ACTION,
    GENRES_KEY
} from '../../const/moviesApi';
import { getRequest } from '../api/api';

// eslint-disable-next-line
import i18n from '../../i18n/i18n';

const LANGUAGE = 'en';

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

const getMovies = (filter) => {
    return new Promise(
        async (resolve, reject) => {
            return resolve(
                [
                    { 'id': 1, 'title': 'Título Pelicula', 'overview': 'Bla bla bla...', 'poster_path': 'https://gmlariojainformatica.files.wordpress.com/2017/05/portada.png' },
                    { 'id': 2, 'title': 'Título Pelicula', 'overview': 'Bla bla bla...', 'poster_path': 'https://gmlariojainformatica.files.wordpress.com/2017/05/portada.png' },
                    { 'id': 3, 'title': 'Título Pelicula', 'overview': 'Bla bla bla...', 'poster_path': 'https://gmlariojainformatica.files.wordpress.com/2017/05/portada.png' },
                    { 'id': 4, 'title': 'Título Pelicula', 'overview': 'Bla bla bla...', 'poster_path': 'https://gmlariojainformatica.files.wordpress.com/2017/05/portada.png' },
                    { 'id': 5, 'title': 'Título Pelicula', 'overview': 'Bla bla bla...', 'poster_path': 'https://gmlariojainformatica.files.wordpress.com/2017/05/portada.png' },
                    { 'id': 6, 'title': 'Título Pelicula', 'overview': 'Bla bla bla...', 'poster_path': 'https://gmlariojainformatica.files.wordpress.com/2017/05/portada.png' },
                    { 'id': 7, 'title': 'Título Pelicula', 'overview': 'Bla bla bla...', 'poster_path': 'https://gmlariojainformatica.files.wordpress.com/2017/05/portada.png' },
                    { 'id': 8, 'title': 'Título Pelicula', 'overview': 'Bla bla bla...', 'poster_path': 'https://gmlariojainformatica.files.wordpress.com/2017/05/portada.png' },
                    { 'id': 9, 'title': 'Título Pelicula', 'overview': 'Bla bla bla...', 'poster_path': 'https://gmlariojainformatica.files.wordpress.com/2017/05/portada.png' },
                    { 'id': 10, 'title': 'Título Pelicula', 'overview': 'Bla bla bla...', 'poster_path': 'https://gmlariojainformatica.files.wordpress.com/2017/05/portada.png' }
                ]
            );
        }
    );
}

const getTVSeries = (filter) => {
    return new Promise(
        async (resolve, reject) => {
            return resolve(
                [
                    { 'id': 1, 'title': 'Título Serie', 'overview': 'Bla bla bla...', 'poster_path': 'https://i.pinimg.com/236x/85/67/b7/8567b7b7bc44a9adf48730b7ff9d6536.jpg' },
                    { 'id': 2, 'title': 'Título Serie', 'overview': 'Bla bla bla...', 'poster_path': 'https://i.pinimg.com/236x/85/67/b7/8567b7b7bc44a9adf48730b7ff9d6536.jpg' },
                    { 'id': 3, 'title': 'Título Serie', 'overview': 'Bla bla bla...', 'poster_path': 'https://i.pinimg.com/236x/85/67/b7/8567b7b7bc44a9adf48730b7ff9d6536.jpg' },
                    { 'id': 4, 'title': 'Título Serie', 'overview': 'Bla bla bla...', 'poster_path': 'https://i.pinimg.com/236x/85/67/b7/8567b7b7bc44a9adf48730b7ff9d6536.jpg' },
                    { 'id': 5, 'title': 'Título Serie', 'overview': 'Bla bla bla...', 'poster_path': 'https://i.pinimg.com/236x/85/67/b7/8567b7b7bc44a9adf48730b7ff9d6536.jpg' },
                    { 'id': 6, 'title': 'Título Serie', 'overview': 'Bla bla bla...', 'poster_path': 'https://i.pinimg.com/236x/85/67/b7/8567b7b7bc44a9adf48730b7ff9d6536.jpg' },
                    { 'id': 7, 'title': 'Título Serie', 'overview': 'Bla bla bla...', 'poster_path': 'https://i.pinimg.com/236x/85/67/b7/8567b7b7bc44a9adf48730b7ff9d6536.jpg' },
                    { 'id': 8, 'title': 'Título Serie', 'overview': 'Bla bla bla...', 'poster_path': 'https://i.pinimg.com/236x/85/67/b7/8567b7b7bc44a9adf48730b7ff9d6536.jpg' },
                    { 'id': 9, 'title': 'Título Serie', 'overview': 'Bla bla bla...', 'poster_path': 'https://i.pinimg.com/236x/85/67/b7/8567b7b7bc44a9adf48730b7ff9d6536.jpg' },
                    { 'id': 10, 'title': 'Título Serie', 'overview': 'Bla bla bla...', 'poster_path': 'https://i.pinimg.com/236x/85/67/b7/8567b7b7bc44a9adf48730b7ff9d6536.jpg' },
                ]
            );
        }
    );
}

const get = async (endpoint, key, query) => {
    let url = getUrl(endpoint, query);
    let result = await getRequest(url, key);

    return result;
}

const getPaginated = () => {

}

const getUrl = (endpoint, query) => {
    let queryParameter = query ? `&query=${query}` : '';
    let url = `${API_URL}/${API_VERSION}/${endpoint}?api_key=${API_KEY}&language=${LANGUAGE}${queryParameter}`;
    return url;
}

export {
    getGenres,
    getMovies,
    getTVSeries
}
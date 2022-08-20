import { MOVIES_PAGE, SERIES_PAGE } from '../../const/pages';

const getCategories = (page) => {
    switch (page) {
        case (MOVIES_PAGE):
            return getMoviesCategories();
        case (SERIES_PAGE):
            return getSeriesCategories();
        default:
            return getMoviesCategories();
    }
}

const getMoviesCategories = () => {
    return [
        { 'id': 1, 'name': 'Acción' },
        { 'id': 2, 'name': 'Drama' },
        { 'id': 3, 'name': 'Comedia' },
        { 'id': 4, 'name': 'Documental' }
    ];
}

const getSeriesCategories = () => {
    return [
        { 'id': 1, 'name': 'Acción' },
        { 'id': 2, 'name': 'Drama' },
        { 'id': 3, 'name': 'Comedia' },
        { 'id': 4, 'name': 'Documental' }
    ];
}

const getMovies = (filter) => {
    return new Promise(
        async (resolve, reject) => {
            return resolve(
                [
                    { 'id': 1123123123, 'title': 'Título', 'overview': 'Bla bla bla...', 'poster_path': 'https://gmlariojainformatica.files.wordpress.com/2017/05/portada.png' },
                    { 'id': 2123123123, 'title': 'Título', 'overview': 'Bla bla bla...', 'poster_path': 'https://gmlariojainformatica.files.wordpress.com/2017/05/portada.png' },
                    { 'id': 3123123123, 'title': 'Título', 'overview': 'Bla bla bla...', 'poster_path': 'https://gmlariojainformatica.files.wordpress.com/2017/05/portada.png' },
                    { 'id': 4123123123, 'title': 'Título', 'overview': 'Bla bla bla...', 'poster_path': 'https://gmlariojainformatica.files.wordpress.com/2017/05/portada.png' },
                    { 'id': 5123123123, 'title': 'Título', 'overview': 'Bla bla bla...', 'poster_path': 'https://gmlariojainformatica.files.wordpress.com/2017/05/portada.png' },
                    { 'id': 6123123123, 'title': 'Título', 'overview': 'Bla bla bla...', 'poster_path': 'https://gmlariojainformatica.files.wordpress.com/2017/05/portada.png' },
                    { 'id': 7123123123, 'title': 'Título', 'overview': 'Bla bla bla...', 'poster_path': 'https://gmlariojainformatica.files.wordpress.com/2017/05/portada.png' },
                    { 'id': 8123123123123, 'title': 'Título', 'overview': 'Bla bla bla...', 'poster_path': 'https://gmlariojainformatica.files.wordpress.com/2017/05/portada.png' },
                    { 'id': 912312312332, 'title': 'Título', 'overview': 'Bla bla bla...', 'poster_path': 'https://gmlariojainformatica.files.wordpress.com/2017/05/portada.png' },
                    { 'id': 10123123123, 'title': 'Título', 'overview': 'Bla bla bla...', 'poster_path': 'https://gmlariojainformatica.files.wordpress.com/2017/05/portada.png' },
                ]
            );
        }
    );
}

const getSeries = (filter) => {
    return new Promise(
        async (resolve, reject) => {
            return resolve(
                [
                    { 'id': 1, 'title': 'Título', 'overview': 'Bla bla bla...', 'poster_path': 'https://gmlariojainformatica.files.wordpress.com/2017/05/portada.png' },
                    { 'id': 2, 'title': 'Título', 'overview': 'Bla bla bla...', 'poster_path': 'https://gmlariojainformatica.files.wordpress.com/2017/05/portada.png' },
                    { 'id': 3, 'title': 'Título', 'overview': 'Bla bla bla...', 'poster_path': 'https://gmlariojainformatica.files.wordpress.com/2017/05/portada.png' },
                    { 'id': 4, 'title': 'Título', 'overview': 'Bla bla bla...', 'poster_path': 'https://gmlariojainformatica.files.wordpress.com/2017/05/portada.png' },
                    { 'id': 5, 'title': 'Título', 'overview': 'Bla bla bla...', 'poster_path': 'https://gmlariojainformatica.files.wordpress.com/2017/05/portada.png' },
                    { 'id': 6, 'title': 'Título', 'overview': 'Bla bla bla...', 'poster_path': 'https://gmlariojainformatica.files.wordpress.com/2017/05/portada.png' },
                    { 'id': 7, 'title': 'Título', 'overview': 'Bla bla bla...', 'poster_path': 'https://gmlariojainformatica.files.wordpress.com/2017/05/portada.png' },
                    { 'id': 8, 'title': 'Título', 'overview': 'Bla bla bla...', 'poster_path': 'https://gmlariojainformatica.files.wordpress.com/2017/05/portada.png' },
                    { 'id': 9, 'title': 'Título', 'overview': 'Bla bla bla...', 'poster_path': 'https://gmlariojainformatica.files.wordpress.com/2017/05/portada.png' },
                    { 'id': 10, 'title': 'Título', 'overview': 'Bla bla bla...', 'poster_path': 'https://gmlariojainformatica.files.wordpress.com/2017/05/portada.png' },
                ]
            );
        }
    );
}

export {
    getCategories,
    getMovies,
    getSeries
}
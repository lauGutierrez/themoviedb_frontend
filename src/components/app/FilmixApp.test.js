import { render, screen, waitFor, act } from '@testing-library/react';
import { Provider } from 'react-redux';

import store from '../../services/redux/stores/store.js';

import {
    MOVIE_ENDPOINT,
    TV_ENDPOINT
} from '../../const/moviesApi';

import {
    getGenres,
    getByGenreAndSearch
} from '../../services/wrappers/moviesApi';

import {
    getMostPopular,
    getByGenre,
    getBySearchText,
    getMoviesGenres,
    getSeriesGenres,
    TEST_POSTER_PATH
} from '../../mocks/moviesApi';

import ItemsView from '../ItemsView/ItemsView';

// eslint-disable-next-line
import i18n from '../../i18n/i18n';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => (jest.fn())
}));

jest.mock('../../services/wrappers/moviesApi');

describe('Without filters, by default load the most popular movies', () => {
    test('Check most popular movies loaded by default', async () => {
        const items = getMostPopular(1, 'movie');
        const genres = getMoviesGenres();

        getGenres.mockResolvedValue(genres);
        getByGenreAndSearch.mockResolvedValue(items);

        await waitFor(
            () => act(
            () => render(
                    <Provider store={store}>
                        <ItemsView tab={MOVIE_ENDPOINT} />
                    </Provider>
                )
            )
        );

        const image = screen.getByAltText('This is the title text for the most popular movie 1');
        expect(image.src).toContain(TEST_POSTER_PATH);
    });
});

// describe('Without filters, by default load the most popular series', () => {
//     test('Check most popular series loaded by default', async () => {
//         const items = getMostPopular(1, 'series');
//         const genres = getSeriesGenres();

//         getGenres.mockResolvedValue(genres);
//         getByGenreAndSearch.mockResolvedValue(items);

//         await waitFor(
//             () => render(<ItemsView tab={TV_ENDPOINT} />)
//         );

//         const image = screen.getByAltText('This is the title text for the most popular series 1');
//         expect(image.src).toContain(TEST_POSTER_PATH);
//     });
// });

// describe('Search movies by text', () => {
//     test('Check search movies by text filter', async () => {
//         const items = getBySearchText(1, 'series');
//         const genres = getMoviesGenres();

//         getGenres.mockResolvedValue(genres);
//         getByGenreAndSearch.mockResolvedValue(items);

//         await waitFor(
//             () => render(<ItemsView tab={MOVIE_ENDPOINT} />)
//         );
//     });
// });

// describe('Search series by text', () => {
//     test('Check search series by text filter', async () => {
//         const items = getBySearchText(1, 'series');
//         const genres = getSeriesGenres();

//         getGenres.mockResolvedValue(genres);
//         getByGenreAndSearch.mockResolvedValue(items);

//         await waitFor(
//             () => render(<ItemsView tab={TV_ENDPOINT} />)
//         );
//     });
// });

// describe('Search movies by genre', () => {
//     test('Check search movies by genre filter', async () => {
//         const items = getByGenre(1, 'series');
//         const genres = getMoviesGenres();

//         getGenres.mockResolvedValue(genres);
//         getByGenreAndSearch.mockResolvedValue(items);

//         await waitFor(
//             () => render(<ItemsView tab={MOVIE_ENDPOINT} />)
//         );
//     });
// });

// describe('Search series by genre', () => {
//     test('Check search series by genre filter', async () => {
//         const items = getByGenre(1, 'series');
//         const genres = getSeriesGenres();

//         getGenres.mockResolvedValue(genres);
//         getByGenreAndSearch.mockResolvedValue(items);

//         await waitFor(
//             () => render(<ItemsView tab={TV_ENDPOINT} />)
//         );
//     });
// });
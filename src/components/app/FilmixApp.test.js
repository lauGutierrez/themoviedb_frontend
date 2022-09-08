import { render, screen, waitFor, act, cleanup, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux';
import { useInView } from 'react-intersection-observer';

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
jest.mock('react-intersection-observer');

const MAX_TIMEOUT = 10000;

beforeAll(() => {
    window.scrollTo = (x, y) => {
        document.documentElement.scrollTop = y;
    }
});

afterAll(() => {
});

beforeEach(() => {
    useInView.mockImplementation(() => [null, false, null]);
});

afterEach(() => {
    cleanup();
});

test('Check most popular movies loaded by default', async () => {
    const items = getMostPopular(1, 'movie');
    const genres = getMoviesGenres();

    getGenres.mockResolvedValue(genres);
    getByGenreAndSearch.mockResolvedValue(items);

    await act(
        async () => await waitFor(
            () => render(
                <Provider store={store}>
                    <ItemsView tab={MOVIE_ENDPOINT} />
                </Provider>
            )
        )
    );

    const image = screen.getByAltText('This is the title text for the most popular movie 1');
    expect(image.src).toContain(TEST_POSTER_PATH);

}, MAX_TIMEOUT);

// test('Check most popular series loaded by default', async () => {
//     console.log('empieza test 2');
//     const items = getMostPopular(1, 'series');
//     const genres = getSeriesGenres();

//     getGenres.mockResolvedValue(genres);
//     getByGenreAndSearch.mockResolvedValue(items);

//     await act(
//         async () => await waitFor(
//             () => render(
//                 <Provider store={store}>
//                     <ItemsView tab={TV_ENDPOINT} />
//                 </Provider>
//             )
//         )
//     );

//     const image = screen.getByAltText('This is the title text for the most popular series 1');
//     expect(image.src).toContain(TEST_POSTER_PATH);
//     console.log('termina test 2');
// }, MAX_TIMEOUT);

test('Check search movies by text filter', async () => {
    getGenres.mockResolvedValue(getMoviesGenres());
    getByGenreAndSearch.mockResolvedValue(getMostPopular(1, 'movie'));

    await act(
        async () => await waitFor(
            () => render(
                <Provider store={store}>
                    <ItemsView tab={MOVIE_ENDPOINT} />
                </Provider>
            )
        )
    );

    getByGenreAndSearch.mockResolvedValue(getBySearchText(1, 'movie'));

    const user = userEvent.setup();
    const searchInput = screen.getByPlaceholderText(/search-keys/);
    const searchButton = screen.getByRole('button', { name: 'search' });

    await user.type(searchInput, 'random search');
    user.click(searchButton);

    const image = await screen.findByAltText(
        'This is the title text for the filtered by search text movie 1'
    );
    expect(image.src).toContain(TEST_POSTER_PATH);
}, MAX_TIMEOUT);

    // test('Check search movies by genre filter', async () => {
    //     const items = getByGenre(1, 'movies');
    //     const genres = getMoviesGenres();

    //     getGenres.mockResolvedValue(genres);
    //     getByGenreAndSearch.mockResolvedValue(items);

    //     await waitFor(
    //         () => render(<ItemsView tab={MOVIE_ENDPOINT} />)
    //     );
    // });

//     test('Check search series by text filter', async () => {
//         const items = getBySearchText(1, 'series');
//         const genres = getSeriesGenres();

//         getGenres.mockResolvedValue(genres);
//         getByGenreAndSearch.mockResolvedValue(items);

//         await waitFor(
//             () => render(<ItemsView tab={TV_ENDPOINT} />)
//         );
//     });

//     test('Check search series by genre filter', async () => {
//         const items = getByGenre(1, 'series');
//         const genres = getSeriesGenres();

//         getGenres.mockResolvedValue(genres);
//         getByGenreAndSearch.mockResolvedValue(items);

//         await waitFor(
//             () => render(<ItemsView tab={TV_ENDPOINT} />)
//         );
//     });

import { render, screen, waitFor, act, cleanup, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux';
import 'intersection-observer';

import {
    mockAllIsIntersecting
} from 'react-intersection-observer/test-utils';

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

describe('Movies tests', () => {

    beforeEach(() => {
        // const mockIntersectionObserver = jest.fn();
        // mockIntersectionObserver.mockReturnValue({
        //     observe: () => null,
        //     unobserve: () => null,
        //     disconnect: () => null
        // });
        // window.IntersectionObserver = mockIntersectionObserver;
        mockAllIsIntersecting(false);
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
    });

    test.only('Check search movies by text filter', async () => {
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
        const user = userEvent.setup();

        const searchInput = screen.getByPlaceholderText(/search-keys/);
        await userEvent.type(searchInput, 'random search');

        const searchButton = screen.getByRole('button', { name: 'search' });
        await user.click(searchButton);

        screen.debug(undefined, 300000);

        const image = screen.getByAltText('This is the title text for filtered by search text movie 1');
        expect(image.src).toContain(TEST_POSTER_PATH);
    });

    // test('Check search movies by genre filter', async () => {
    //     const items = getByGenre(1, 'movies');
    //     const genres = getMoviesGenres();

    //     getGenres.mockResolvedValue(genres);
    //     getByGenreAndSearch.mockResolvedValue(items);

    //     await waitFor(
    //         () => render(<ItemsView tab={MOVIE_ENDPOINT} />)
    //     );
    // });
});

// describe('Test 2', () => {
//     beforeEach(() => {
//         mockAllIsIntersecting(false);
//     });

//     afterEach(() => {
//         cleanup();
//     });

//     test('Check most popular series loaded by default', async () => {
//         const items = getMostPopular(1, 'series');
//         const genres = getSeriesGenres();

//         getGenres.mockResolvedValue(genres);
//         getByGenreAndSearch.mockResolvedValue(items);

//         await act(
//             async () => await waitFor(
//                 () => render(
//                     <Provider store={store}>
//                         <ItemsView tab={TV_ENDPOINT} />
//                     </Provider>
//                 )
//             )
//         );

//         const image = screen.getByAltText('This is the title text for the most popular series 1');
//         expect(image.src).toContain(TEST_POSTER_PATH);
//     });

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
// });
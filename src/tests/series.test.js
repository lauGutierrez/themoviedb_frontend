import { screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

import { useInView } from 'react-intersection-observer';

import {
    TV_ENDPOINT
} from '../const/moviesApi';

import {
    getGenres,
    getByGenreAndSearch
} from '../services/wrappers/moviesApi';

import {
    getMostPopular,
    getByGenre,
    getBySearchText,
    getSeriesGenres,
    TEST_POSTER_PATH,
    RESULTS_PER_PAGE
} from './mocks/moviesApi';

import {
    renderWithProviders,
    MAX_TIMEOUT
} from './utils';

import ItemsView from '../components/ItemsView/ItemsView';

// eslint-disable-next-line
import i18n from '../i18n/i18n';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => (jest.fn())
}));
jest.mock('../services/wrappers/moviesApi');
jest.mock('react-intersection-observer');

// describe('Series', () => {
//     beforeAll(() => {
//         window.scrollTo = (x, y) => {
//             document.documentElement.scrollTop = y;
//         }
//     });

//     beforeEach(() => {
//         useInView.mockImplementation(() => [null, false, null]);
//     });

//     test('Check most popular series loaded by default', async () => {
//         const genres = getSeriesGenres();

//         getGenres.mockResolvedValue(genres);
//         getByGenreAndSearch.mockResolvedValue(items);

//         await act(
//             async () => await waitFor(
//                 () => renderWithProviders(
//                     <ItemsView tab={TV_ENDPOINT} />
//                 )
//             )
//         );

//         const image = screen.getByAltText(
//             'This is the title text for the most popular series 1'
//         );
//         expect(image.src).toContain(TEST_POSTER_PATH);
//     }, MAX_TIMEOUT);

//     test('Check search series by text filter', async () => {
//         getGenres.mockResolvedValue(getSeriesGenres());
//         getByGenreAndSearch.mockResolvedValue(getMostPopular(1, 'series'));

//         await act(
//             async () => await waitFor(
//                 () => renderWithProviders(
//                     <ItemsView tab={TV_ENDPOINT} />
//                 )
//             )
//         );

//         getByGenreAndSearch.mockResolvedValue(getBySearchText(1, 'series'));

//         const user = userEvent.setup();
//         const searchInput = screen.getByPlaceholderText(/search-keys/);
//         const searchButton = screen.getByRole('button', { name: 'search' });

//         await user.type(searchInput, 'random search');
//         user.click(searchButton);

//         const image = await screen.findByAltText(
//             'This is the title text for the filtered by search text series 1'
//         );
//         expect(image.src).toContain(TEST_POSTER_PATH);
//     }, MAX_TIMEOUT);

//     test('Check search series by genre filter', async () => {
//         getGenres.mockResolvedValue(getSeriesGenres());
//         getByGenreAndSearch.mockResolvedValue(getMostPopular(1, 'series'));

//         await act(
//             async () => await waitFor(
//                 () => renderWithProviders(
//                     <ItemsView tab={TV_ENDPOINT} />
//                 )
//             )
//         );

//         getByGenreAndSearch.mockResolvedValue(getByGenre(1, 'series'));

//         const user = userEvent.setup();

//         const genreSelector = screen.getByRole('button', { name: 'genre ​' });
//         user.click(genreSelector);

//         const genreOption = await screen.findByText(/Action & Adventure/);
//         await act(() => user.click(genreOption));

//         const image = await screen.findByAltText(
//             'This is the title text for the filtered by genre series 1'
//         );
//         expect(image.src).toContain(TEST_POSTER_PATH);
//     }, MAX_TIMEOUT);

//     test('Check series card detail is opened and closed', async () => {
//         getGenres.mockResolvedValue(getSeriesGenres());
//         getByGenreAndSearch.mockResolvedValue(getMostPopular(1, 'series'));

//         await act(
//             async () => await waitFor(
//                 () => renderWithProviders(
//                     <ItemsView tab={TV_ENDPOINT} />
//                 )
//             )
//         );

//         const user = userEvent.setup();

//         const seriesCard = screen.getByRole(
//             'img',
//             { name: 'This is the title text for the most popular series 1' }
//         );
//         user.click(seriesCard);

//         const seriesCardDetail = await screen.findByText(
//             /This is the overview text for the most popular series 1/
//         );
//         await act(() => user.click(seriesCardDetail));
//         await waitFor(() => expect(seriesCardDetail).not.toBeInTheDocument());
//     }, MAX_TIMEOUT);

//     test('Check pagination activated on scroll for series results', async () => {
//         getGenres.mockResolvedValue(getSeriesGenres());
//         getByGenreAndSearch.mockResolvedValue(getMostPopular(1, 'series'));

//         await act(
//             async () => await waitFor(
//                 () => renderWithProviders(
//                     <ItemsView tab={TV_ENDPOINT} />
//                 )
//             )
//         );

//         getByGenreAndSearch.mockResolvedValue(getMostPopular(2, 'series'));
//         useInView.mockImplementation(() => [null, true, null]);

//         const image = await screen.findByAltText(
//             `This is the title text for the most popular series ${RESULTS_PER_PAGE + 1}`
//         );
//         expect(image.src).toContain(TEST_POSTER_PATH);
//         const backToTopButton = await screen.findByRole('button', { name: 'aria-back-to-top' });
//     }, MAX_TIMEOUT);
// });
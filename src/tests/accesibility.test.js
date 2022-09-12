import { waitFor, act } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import '@testing-library/jest-dom/extend-expect';
import 'jest-axe/extend-expect';

import { useInView } from 'react-intersection-observer';

import {
    MOVIE_ENDPOINT
} from '../const/moviesApi';

import {
    getGenres,
    getByGenreAndSearch
} from '../services/wrappers/moviesApi';

import {
    getMostPopular,
    getMoviesGenres,
    getMockItem
} from './mocks/moviesApi';

import {
    renderWithProviders,
    MAX_TIMEOUT
} from './utils';

import ItemsView from '../components/ItemsView/ItemsView';
import Header from '../components/Header/Header';
import LoadingState from '../components/LoadingState/LoadingState';
import ScrollPaginator from '../components/ScrollPaginator/ScrollPaginator';
import SearchBar from '../components/SearchBar/SearchBar';
import ItemsBoard from '../components/ItemsBoard/ItemsBoard';
import ItemCard from '../components/ItemCard/ItemCard';
import ItemCardDetail from '../components/ItemCardDetail/ItemCardDetail';

// eslint-disable-next-line
import i18n from '../i18n/i18n';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => (jest.fn())
}));
jest.mock('../services/wrappers/moviesApi');
jest.mock('react-intersection-observer');

expect.extend(toHaveNoViolations);

describe('Accesibility', () => {
    beforeAll(() => {
        window.scrollTo = (x, y) => {
            document.documentElement.scrollTop = y;
        }
        const { getComputedStyle } = window;
        window.getComputedStyle = (elt) => getComputedStyle(elt);
    });

    beforeEach(() => {
        useInView.mockImplementation(() => [null, false, null]);
    });

    test('header should be accesible', async () => {
        const { container } = await act(
            async () => await waitFor(
                () => renderWithProviders(<Header />)
            )
        );
        expect(await axe(container)).toHaveNoViolations();
    });

    test('loading state should be accesible', async () => {
        const { container } = await act(
            async () => await waitFor(
                () => renderWithProviders(<LoadingState />)
            )
        );
        expect(await axe(container)).toHaveNoViolations();
    });

    test('scroll paginator should be accesible', async () => {
        const { container } = await act(
            async () => await waitFor(
                () => renderWithProviders(<ScrollPaginator />)
            )
        );
        expect(await axe(container)).toHaveNoViolations();
    });

    test('search bar should be accesible', async () => {
        const { container } = await act(
            async () => await waitFor(
                () => renderWithProviders(<SearchBar />)
            )
        );
        expect(await axe(container)).toHaveNoViolations();
    });

    test('item card should be accesible', async () => {
        let mockItem = getMockItem(1, 'movie', 'the most popular');
        const { container } = await act(
            async () => await waitFor(
                () => renderWithProviders(
                    <ItemCard
                        id={mockItem['id']}
                        title={mockItem['title']}
                        overview={mockItem['overview']}
                        image={mockItem['poster_path']}
                        closeCb={() => { }} />
                )
            )
        );
        expect(await axe(container)).toHaveNoViolations();
    });

    test('item card detail should be accesible', async () => {
        let mockItem = getMockItem(1, 'movie', 'the most popular');
        const { container } = await act(
            async () => await waitFor(
                () => renderWithProviders(
                    <ItemCardDetail
                        isOpened={true}
                        title={mockItem['title']}
                        overview={mockItem['overview']}
                        image={mockItem['poster_path']}
                        closeCb={() => { }} />
                )
            )
        );
        expect(await axe(container)).toHaveNoViolations();
    });

    test('items board should be accesible', async () => {
        const { container } = await act(
            async () => await waitFor(
                () => renderWithProviders(
                    <ItemsBoard />
                )
            )
        );
        expect(await axe(container)).toHaveNoViolations();
    });

    test('items view should be accesible', async () => {
        getGenres.mockResolvedValue(getMoviesGenres());
        getByGenreAndSearch.mockResolvedValue(getMostPopular(1, 'movie'));

        const { container } = await act(
            async () => await waitFor(
                () => renderWithProviders(<ItemsView tab={MOVIE_ENDPOINT} />)
            )
        );
        expect(await axe(container)).toHaveNoViolations();
    }, MAX_TIMEOUT);
});
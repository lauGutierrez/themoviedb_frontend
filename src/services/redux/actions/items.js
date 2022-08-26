import actionTags from './actionsTags';

const resetItems = () => {
    return {
        type: actionTags.RESET_ITEMS,
        payload: []
    }
}

const addItems = (items) => {
    return {
        type: actionTags.ADD_ITEMS,
        payload: items
    }
}

const setGenre = (genre) => {
    return {
        type: actionTags.SET_GENRE,
        payload: genre
    }
}

const setSearchQuery = (query) => {
    return {
        type: actionTags.SET_SEARCH_QUERY,
        payload: query
    }
}

const itemsActions = {
    resetItems,
    addItems,
    setGenre,
    setSearchQuery
};

export default itemsActions;
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

const increaseCurrentPage = () => {
    return {
        type: actionTags.INCREASE_CURRENT_PAGE,
        payload: null
    }
}

const itemsActions = {
    resetItems,
    addItems,
    setGenre,
    increaseCurrentPage
};

export default itemsActions;
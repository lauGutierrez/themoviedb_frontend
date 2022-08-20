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

const itemsActions = {
    resetItems,
    addItems
};

export default itemsActions;
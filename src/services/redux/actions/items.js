import actionTags from './actionsTags';

const setItems = (item) => {
    return {
        type: actionTags.SET_ITEMS,
        payload: item
    }
}

const userActions = {
    setItems
};

export default userActions;
import actionTags from '../actions/actionsTags';

const items = (state = {}, action) => {
    switch (action.type) {
        case actionTags.SET_ITEMS:
            return {};
        default:
            return state;
    }
}

export default items;   
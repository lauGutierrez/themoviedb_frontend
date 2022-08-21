import actionTags from '../actions/actionsTags';

const items = (state = [], action) => {
    switch (action.type) {
        case actionTags.RESET_ITEMS:
            return [];
        case actionTags.ADD_ITEMS:
            return [
                ...state,
                ...action.payload
            ];
        default:
            return state;
    }
}

export default items;   
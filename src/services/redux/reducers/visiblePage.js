import actionTags from '../actions/actionsTags';

const visiblePage = (state = '', action) => {
    switch (action.type) {
        case actionTags.SET_VISIBLE_PAGE:
            return action.payload;
        default:
            return state;
    }
}

export default visiblePage;   
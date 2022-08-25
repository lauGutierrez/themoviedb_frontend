import actionTags from '../actions/actionsTags';

const visibleTab = (state = '', action) => {
    switch (action.type) {
        case actionTags.SET_VISIBLE_TAB:
            return action.payload;
        default:
            return state;
    }
}

export default visibleTab;   
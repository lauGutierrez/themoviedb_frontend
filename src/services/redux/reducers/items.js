import actionTags from '../actions/actionsTags';

const items = (
    state = {
        'list': [],
        'page': 0,
        'genre': ''
    },
    action) => {
    switch (action.type) {
        case actionTags.RESET_ITEMS:
            return {
                'list': [],
                'page': 0,
                'genre': ''
            };
        case actionTags.ADD_ITEMS:
            return {
                ...state,
                'list': [
                    ...state.list,
                    ...action.payload
                ]
            }
        case actionTags.SET_GENRE:
            return {
                ...state,
                'genre': action.payload
            }
        case actionTags.INCREASE_CURRENT_PAGE:
            return {
                ...state,
                'page': state.page + 1
            }
        default:
            return state;
    }
}

export default items;   
import actionTags from '../actions/actionsTags';

const items = (
    state = {
        'list': [],
        'page': 0,
        'genre': '',
        'query': ''
    },
    action) => {
    switch (action.type) {
        case actionTags.RESET_ITEMS:
            return {
                'list': [],
                'page': 0,
                'genre': '',
                'query': ''
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
                'list': [],
                'page': 0,
                'genre': action.payload
            }
        case actionTags.SET_SEARCH_QUERY:
            return {
                ...state,
                'list': [],
                'page': 0,
                'query': action.payload
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
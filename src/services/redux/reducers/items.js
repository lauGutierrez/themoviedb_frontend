import actionTags from '../actions/actionsTags';

const items = (
    state = {
        'list': [],
        'page': 1,
        'total': 0,
        'genre': '',
        'query': '',
        'loading': true
    },
    action) => {
    switch (action.type) {
        case actionTags.RESET_ITEMS:
            return {
                'list': [],
                'page': 1,
                'total': 0,
                'genre': '',
                'query': '',
                'loading': true
            };
        case actionTags.ADD_ITEMS:
            return {
                ...state,
                'loading': false,
                'page': state.page + 1,
                'total': action.payload.total,
                'list': [
                    ...state.list,
                    ...action.payload.items
                ]
            }
        case actionTags.SET_GENRE:
            return {
                ...state,
                'list': [],
                'page': 1,
                'total': 0,
                'loading': true,
                'genre': action.payload
            }
        case actionTags.SET_SEARCH_QUERY:
            return {
                ...state,
                'list': [],
                'page': 1,
                'total': 0,
                'loading': true,
                'query': action.payload
            }
        default:
            return state;
    }
}

export default items;   
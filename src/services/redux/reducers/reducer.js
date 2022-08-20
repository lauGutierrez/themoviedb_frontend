import items from './items';
import visiblePage from './visiblePage';

import { combineReducers } from 'redux';

const reducer = combineReducers({
    items,
    visiblePage
});

export default reducer;
import items from './items';
import visibleTab from './visibleTab';

import { combineReducers } from 'redux';

const reducer = combineReducers({
    items,
    visibleTab
});

export default reducer;
import actionTags from './actionsTags';

const setVisibleTab = (tab) => {
    return {
        type: actionTags.SET_VISIBLE_TAB,
        payload: tab
    }
}

const visibleTabActions = {
    setVisibleTab
};

export default visibleTabActions;
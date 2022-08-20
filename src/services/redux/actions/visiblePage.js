import actionTags from './actionsTags';

const setVisiblePage = (page) => {
    return {
        type: actionTags.SET_VISIBLE_PAGE,
        payload: page
    }
}

const visiblePageActions = {
    setVisiblePage
};

export default visiblePageActions;
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import actions from '../../services/redux/actions/actions';
import InternalView from '../InternalView/InternalView';
import ItemsBoard from '../ItemsBoard/ItemsBoard';

import { MOVIES_PAGE } from '../../const/pages';

const MoviesView = () => {
  const dispatch = useDispatch();

  const setVisiblePage = () => {
    dispatch(actions.visiblePageActions.setVisiblePage(MOVIES_PAGE));
  }

  useEffect(() => {
    setVisiblePage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <InternalView>
      <ItemsBoard/>
    </InternalView>
  );
}

export default MoviesView;

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import actions from '../../services/redux/actions/actions';
import InternalView from '../InternalView/InternalView';
import ItemsBoard from '../ItemsBoard/ItemsBoard';


const ItemsView = (props) => {
  const dispatch = useDispatch();

  const setVisibleTab = () => {
    dispatch(actions.visibleTabActions.setVisibleTab(props.tab));
  }

  useEffect(() => {
    setVisibleTab();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <InternalView>
      <ItemsBoard/>
    </InternalView>
  );
}

export default ItemsView;

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';

import './ScrollPaginator.scss';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ScrollPaginator = (props) => {
  const { t } = useTranslation();

  const [current, setCurrent] = React.useState(0);

  // eslint-disable-next-line
  const [observedReference, isIntersecting] = useInView({threshold: 0.5,});

  const items = useSelector(state => state.items.list);
  const total = useSelector(state => state.items.total);

  useEffect(() => {
    if (items) {
      setCurrent(items.length);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  useEffect(() => {
    if (isIntersecting) {
      props.addItemsCb();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isIntersecting]);

  const getContent = () => {
    let currentFormatted = Number(current).toLocaleString();
    let totalFormatted = Number(total).toLocaleString();
    return `${t('paginator-1')} ${t(currentFormatted)} ${t('paginator-2')} ${t(totalFormatted)} ${t('paginator-3')}`;
  }

  return (
    <Box p={2}>
      <Typography ref={observedReference} className="paginator" variant="h6" component="span">
        {getContent()}
      </Typography>
    </Box>
  );
}

export default ScrollPaginator;

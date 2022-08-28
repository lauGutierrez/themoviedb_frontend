import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import './ScrollPaginator.scss';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ScrollPaginator = (props) => {
  const { t } = useTranslation();

  const [current, setCurrent] = React.useState(0);
  const [isIntersecting, setIsIntersecting] = React.useState(false);

  const items = useSelector(state => state.items.list);
  const total = useSelector(state => state.items.total);

  let observer = null;

  useEffect(() => {
    initObserver();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  const initObserver = () => {
    observer = new IntersectionObserver(
      (entries) => {
        setIsIntersecting(entries[0].isIntersecting);
      },
      { threshold: [1] }
    );
    observer.observe(document.querySelector(".paginator"));
  }

  const getContent = () => {
    let currentFormatted = Number(current).toLocaleString();
    let totalFormatted = Number(total).toLocaleString();
    return `${t('paginator-1')} ${t(currentFormatted)} ${t('paginator-2')} ${t(totalFormatted)} ${t('paginator-3')}`;
  }

  return (
    <Box p={2}>
      <Typography className="paginator" variant="h6" component="span">
        {getContent()}
      </Typography>
    </Box>
  );
}

export default ScrollPaginator;

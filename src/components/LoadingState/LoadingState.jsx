import React from 'react';
import { useTranslation } from 'react-i18next';

import './LoadingState.scss';

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const LoadingState = () => {
  const { t } = useTranslation();

  return (
    <Box className="loading-container">
      <CircularProgress aria-label={t('aria-loading')} />
    </Box>
  );
}

export default LoadingState;

import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = (props) => {
  const [search, setSearch] = useState('');

  const { t } = useTranslation();

  const query = useSelector(state => state.items.query);

  useEffect(() => {
    if (!query) {
      setSearch('');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const handleKeypress = (event) => {
    if (event.charCode === 13) {
      props.searchCb(event.target.value);
    }
  }

  return (
    <React.Fragment>
      <TextField
        onInput={(event) => setSearch(event.target.value)}
        label={props.label}
        variant="outlined"
        placeholder={props.placeholder}
        value={search}
        size="small"
        onKeyPress={handleKeypress}
        inputProps={{ 'aria-label': t('aria-search') }} />
      <IconButton
        aria-label="search"
        onClick={(event) => props.searchCb(search)}>
        <SearchIcon />
      </IconButton>
    </React.Fragment>
  );
}

export default SearchBar;

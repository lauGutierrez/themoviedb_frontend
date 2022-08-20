import React, { useState } from 'react';

import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = (props) => {
  const [search, setSearch] = useState('');

  return (
    <React.Fragment>
        <TextField
          onInput={(event) => setSearch(event.target.value)}
          label={props.label}
          variant="outlined"
          placeholder={props.placeholder}
          size="small" />
      <IconButton
        aria-label="search"
        onClick={(event) => props.searchCb(search)}>
        <SearchIcon />
      </IconButton>
    </React.Fragment>
  );
}

export default SearchBar;

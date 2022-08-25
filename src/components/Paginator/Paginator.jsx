import React from 'react';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Paginator = (props) => {
  const [page, setPage] = React.useState(1);

  const onChange = (event, value) => {
    setPage(value);
    props.onChange(value);
  }

  return (
    <Stack spacing={2}>
      <Pagination
        color="primary"
        count={props.pages}
        page={page}
        boundaryCount={2}
        onChange={onChange} />
    </Stack>
  );
}

export default Paginator;

import { TextField } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'components/redux/filter/filter-slice';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Find contacts"
        variant="outlined"
        onChange={handleChange}
      />
    </div>
  );
};

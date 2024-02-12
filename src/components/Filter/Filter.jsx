import { TextField } from '@mui/material';
import React from 'react';

export const Filter = ({ handleChange }) => {
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

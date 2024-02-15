import { createSlice } from '@reduxjs/toolkit';

const filterReduser = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter: (_, { payload }) => payload,
  },
});

export const { setFilter } = filterReduser.actions;

export default filterReduser.reducer;

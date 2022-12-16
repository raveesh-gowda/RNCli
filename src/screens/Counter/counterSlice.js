import {createSlice} from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    number: 0,
  },
  reducers: {
    increment: state => {
      state.number += 1;
    },
    reset: state => {
      state.number = 0;
    },
    decrement: state => {
      state.number -= 1;
    },
  },
});

export const {increment, decrement, reset} = counterSlice.actions;

export default counterSlice.reducer;

// boardSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  squares: Array(64).fill(null).map((_, idx) => ({
    color: (Math.floor(idx / 8) + (idx % 8)) % 2 === 0 ? 'white' : 'black',
  })),
};

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    changeColor: (state, action) => {
      const { index } = action.payload;
      const currentSquare = state.squares[index];

      // Change the color based on the current square color
      if (currentSquare.color === 'white') {
        currentSquare.color = 'yellow';
      } else if (currentSquare.color === 'black') {
        currentSquare.color = 'red';
      }
    },
  },
});

export const { changeColor } = boardSlice.actions;
export default boardSlice.reducer;

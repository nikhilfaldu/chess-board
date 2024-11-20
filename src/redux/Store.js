// store.js

import { configureStore } from '@reduxjs/toolkit';
import boardReducer from './BoardSlice';

const store = configureStore({
  reducer: {
    board: boardReducer,
  },
});

export default store;

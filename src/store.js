import { configureStore } from '@reduxjs/toolkit';
import searchbarReducer from './components/Searchbar/searchbarSlice';

export const store = configureStore({
  reducer: {
    searchbar: searchbarReducer
  },
});

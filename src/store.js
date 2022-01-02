import { configureStore } from '@reduxjs/toolkit';
import searchbarReducer from './components/Searchbar/searchbarSlice';
import resultslistReducer from './components/ResultsList/resultslistSlice';

export const store = configureStore({
  reducer: {
    searchbar: searchbarReducer,
    resultslist: resultslistReducer
  },
});

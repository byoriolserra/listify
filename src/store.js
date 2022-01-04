import { configureStore } from '@reduxjs/toolkit';
import searchbarReducer from './components/Searchbar/searchbarSlice';
import resultslistReducer from './components/ResultsList/resultslistSlice';
import playlistReducer from './components/Playlist/playlistSlice';

export const store = configureStore({
  reducer: {
    searchbar: searchbarReducer,
    resultslist: resultslistReducer,
    playlist: playlistReducer
  },
});

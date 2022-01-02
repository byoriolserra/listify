import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    searchTerm: '',
};

const searchbarSlice = createSlice({
    name: 'searchbar',
    initialState,
    reducers: {
        updateSearchTerm(state, action) {
            state.searchTerm = action.payload;
        }
    }
});

export default searchbarSlice.reducer;
export const { updateSearchTerm } = searchbarSlice.actions;
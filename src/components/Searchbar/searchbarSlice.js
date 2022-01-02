import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    term: ''
};

const searchbarSlice = createSlice({
    name: 'searchbar',
    initialState,
    reducers: {
        search(state, action) {
            state.term = action.payload;
        }
    }
});

export default searchbarSlice.reducer;
export const { search } = searchbarSlice.actions;
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    term: ''
};

const searchbarSlice = createSlice({
    name: 'searchbar',
    initialState: initialState,
    reducers: {
        search: (state, payload) => {
            state.term = payload;
        }
    }
});

export default searchbarSlice.reducer;
export const { search } = searchbarSlice.actions;
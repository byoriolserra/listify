import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    searchResults: []
}

const resultslistSlice = createSlice({
    name: 'resultslist',
    initialState,
    reducers: {
        update(state, action) {
            state.searchResults = action.payload;
        }
    }
});

export default resultslistSlice.reducer;
export const { update } = resultslistSlice.actions;
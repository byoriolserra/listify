import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tracks: []
}

const playlistSlice = createSlice({
    name: 'playlist',
    initialState,
    actions: {
        add(state, action) {
            state.tracks.push(action.payload);
        }
    }
});

export default playlistSlice.reducer;
export const { add } = playlistSlice.actions;
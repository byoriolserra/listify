import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tracks: []
}

const playlistSlice = createSlice({
    name: 'playlist',
    initialState,
    reducers: {
        add(state, action) {
            state.playlist.tracks.push(action.payload);
        }
    }
});

export default playlistSlice.reducer;
export const { add } = playlistSlice.actions;
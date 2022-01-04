import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    playlistTracks: []
}

const playlistSlice = createSlice({
    name: 'playlist',
    initialState,
    reducers: {
        add(state, action) {
            state.playlistTracks.push(action.payload);
        }
    }
});

export default playlistSlice.reducer;
export const { add } = playlistSlice.actions;
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    playlistTracks: []
}

const playlistSlice = createSlice({
    name: 'playlist',
    initialState,
    reducers: {
        add(state, action) {
            if(state.playlistTracks.find(track => track.id === action.payload.id)) {
                return;
            }
            state.playlistTracks.push(action.payload);
        },
        remove(state, action) {
            const updatedPlaylist = state.playlistTracks.filter(song => song.id !== action.payload.id);
            state.playlistTracks = updatedPlaylist;
        }
    }
});

export default playlistSlice.reducer;
export const { add, remove } = playlistSlice.actions;
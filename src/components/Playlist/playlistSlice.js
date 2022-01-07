import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    playlistName: '',
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
        },
        updateName(state, action) {
            state.playlistName = action.payload;
        },
        clear(state) {
            state.playlistTracks = [];
            state.playlistName = '';
        }
    }
});

export default playlistSlice.reducer;
export const { add, remove, updateName, clear } = playlistSlice.actions;
import React from 'react';
import { mount } from 'enzyme';
import Playlist from './Playlist';
import { Song } from '../ResultsList/ResultsList';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const playlistSlice = createSlice({
    name: 'playlist',
    initialState: {
        playlistTracks: [{
            name: 'Track Name',
            artist: 'Artist Name',
            id: 1
        }]
    },
    reducers: {
    }
});

const playlistReducer = playlistSlice.reducer;

const mockStore = configureStore({
    reducer: {
        playlist: playlistReducer
    }
});

describe('Playlist', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = mount(<Provider store={mockStore}><Playlist /></Provider>);
    })

    it('renders without crashing', () => {
        expect(wrapper).toHaveLength(1);
    })

    it('displays a title', () => {
        const title = wrapper.find('h2');

        expect(title.text()).toBe('Playlist: ');
    })

    it('renders a list of songs', () => {
        const song = wrapper.find(Song);

        expect(song).toHaveLength(1);
    })
})
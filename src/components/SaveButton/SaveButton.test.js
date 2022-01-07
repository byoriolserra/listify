import React from 'react';
import { mount } from 'enzyme';
import SaveButton, { Button } from './SaveButton';
import { Provider } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';

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


describe('Save Button', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = mount(<Provider store={mockStore}><SaveButton /></Provider>);
    })

    it('renders without crashing', () => {
        expect(wrapper).toHaveLength(1);
    })

    it('renders a button with the proper text', () => {
        const button = wrapper.find(Button);

        expect(button.text()).toBe('Save Playlist');
    })
})
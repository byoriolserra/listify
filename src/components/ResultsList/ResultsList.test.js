import React from 'react';
import { mount } from 'enzyme';
import ResultsList, { Song } from './ResultsList';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const resultslistSlice = createSlice({
    name: 'resultslist',
    initialState: {
        searchResults: [{
            name: 'Track Name',
            artist: 'Artist Name',
            id: 1
        }]
    },
    reducers: {
    }
});

const resultslistReducer = resultslistSlice.reducer;

const mockStore = configureStore({
    reducer: {
        resultslist: resultslistReducer
    }
})

describe('Results List', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = mount(<Provider store={mockStore}><ResultsList /></Provider>);
    })

    it('renders without crashing', () => {
        expect(wrapper.find(ResultsList)).toHaveLength(1);
    })

    it('displays a title', () => {
        const title = wrapper.find('h2');

        expect(title.text()).toBe('Results');
    })

    it('renders a list of songs', () => {
        const song = wrapper.find(Song);

        expect(song).not.toHaveLength(0);
    })
})
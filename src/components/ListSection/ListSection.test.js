import React from 'react';
import { shallow } from 'enzyme';
import ListSection from './ListSection';
import ResultsList from '../ResultsList/ResultsList';
import Playlist from '../Playlist/Playlist';

describe('List Section', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<ListSection />)
    })

    it('renders without crashing', () => {
        expect(wrapper).toHaveLength(1);
    })

    it('renders a results list', () => {
        const list = wrapper.find(ResultsList);

        expect(list).toHaveLength(1);
    })

    it('renders a playlist', () => {
        const playlist = wrapper.find(Playlist);

        expect(playlist).toHaveLength(1);
    })
})
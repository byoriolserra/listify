import React from 'react';
import { shallow } from 'enzyme';
import Playlist from './Playlist';
import { Song } from '../ResultsList/ResultsList';

describe('Results List', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Playlist />);
    })

    it('renders without crashing', () => {
        expect(wrapper).toHaveLength(1);
    })

    it('displays a title', () => {
        const title = wrapper.find('h2');

        expect(title.text()).toBe('Playlist');
    })

    it('renders a list of songs', () => {
        const song = wrapper.find(Song);

        expect(song).toHaveLength(2);
    })
})
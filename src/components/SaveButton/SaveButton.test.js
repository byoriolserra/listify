import React from 'react';
import { shallow } from 'enzyme';
import SaveButton, { Button } from './SaveButton';

describe('Save Button', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<SaveButton />);
    })

    it('renders without crashing', () => {
        expect(wrapper).toHaveLength(1);
    })

    it('renders a button with the proper text', () => {
        const button = wrapper.find(Button);

        expect(button.text()).toBe('Save Playlist');
    })
})
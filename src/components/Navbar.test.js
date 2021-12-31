import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './Navbar';

describe('Navbar', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Navbar />);
    })

    it('renders without crashing', () => {
        expect(wrapper).toHaveLength(1);
    })

    it('renders the app\'s title', () => {
        const title = wrapper.find('h1');

        expect(title.text()).toBe('Listify');
    })

    it('renders a log out button', () => {
        const logout = wrapper.find('p');
        
        expect(logout.text()).toBe('Log Out');
    })

})
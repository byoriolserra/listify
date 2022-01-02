import React from 'react';
import { mount } from 'enzyme';
import Searchbar, { SearchForm } from './Searchbar';
import { Provider } from 'react-redux';
import { store } from '../../store';

describe('Searchbar', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = mount(<Provider store={store}><Searchbar /></Provider>);
    })

    it('renders without crashing', () => {
        expect(wrapper).toHaveLength(1);
    })

    it('renders a form', () => {
        const form = wrapper.find(SearchForm);

        expect(form).toHaveLength(1);
    })

    describe('form', () => {
        it('renders an input', () => {
            const form = wrapper.find(SearchForm);
            const input = form.find('input');

            expect(input).toHaveLength(2);
        })

        it('has the proper placeholder', () => {
            const input = wrapper.find(SearchForm).find('input');

            expect(input.at(0).props().placeholder).toBe('Search for a track');
        })

        it('has a Search button', () => {
            const input = wrapper.find(SearchForm).find('input');

            expect(input.at(1).props().value).toBe('Search');
        })
    })
})
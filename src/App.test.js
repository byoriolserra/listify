import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Navbar from './components/Navbar/Navbar';
import Searchbar from './components/Searchbar/Searchbar';

describe('App', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  })

  it('renders without crashing', () => {

    expect(wrapper).toHaveLength(1);
  })

  it('renders a navbar', () => {
    const navbar = wrapper.find(Navbar);

    expect(navbar).toHaveLength(1);
  })

  it('renders a search bar', () => {
    const searchbar = wrapper.find(Searchbar);

    expect(searchbar).toHaveLength(1);
  })
})
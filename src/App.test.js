import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Navbar from './components/Navbar';

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
})
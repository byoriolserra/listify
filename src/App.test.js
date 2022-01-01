import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Navbar from './components/Navbar/Navbar';
import Searchbar from './components/Searchbar/Searchbar';
import ResultsList from './components/ResultsList/ResultsList';
import Playlist from './components/Playlist/Playlist';

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

  it('renders a results list container', () => {
    const resultslist = wrapper.find(ResultsList);

    expect(resultslist).toHaveLength(1);
  })

  it('renders a playlist', () => {
    const playlist = wrapper.find(Playlist);

    expect(playlist).toHaveLength(1);
  })
})
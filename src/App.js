import React from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar/Navbar';
import Searchbar from './components/Searchbar/Searchbar';
import ResultsList from './components/ResultsList/ResultsList';
import Playlist from './components/Playlist/Playlist';
import ListSection from './components/ListSection/ListSection';
import SaveButton from './components/SaveButton/SaveButton';

function App() {
  return (
    <AppContainer>
      <Navbar />
      <Searchbar />
      <ListSection>
        <ResultsList />
        <Playlist />
      </ListSection>
      <SaveButton />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  max-width: 100vw;
  max-height: 100vh;
`;

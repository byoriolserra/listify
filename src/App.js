import React from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar/Navbar';
import Searchbar from './components/Searchbar/Searchbar';

function App() {
  return (
    <AppContainer>
      <Navbar />
      <Searchbar />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  max-width: 100vw;
  max-height: 100vh;
`;

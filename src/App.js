import React from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';

function App() {
  return (
    <AppContainer>
      <Navbar />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  max-width: 100vw;
  max-height: 100vh;
`;

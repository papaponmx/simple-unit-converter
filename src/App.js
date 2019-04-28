import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import theme from 'styled-theming';


import './App.css';
import ConverterApp from './converter-app';

const boxBackgroundColor = theme('mode', {
  light: '#fff',
  dark: '#000',
});

const Box = styled.div`
  color: white;
  background-color: ${boxBackgroundColor};
`;

// TODO: Add routing
function App() {
  return (
  <ThemeProvider theme={{ mode: 'dark' }}>
    <div className="App">
      <Box>
      Something Box</Box>
      <ConverterApp />
    </div>
  </ThemeProvider>
  );
}

export default App;

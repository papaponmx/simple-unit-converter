import React from 'react';
import { ThemeProvider } from 'styled-components';

import './App.css';
import ConverterApp from './converter-app';


export const DEFAULT_THEME = {
  primaryColor: '#E4405F',
  lightColor: '#FFFFFF',
  // secondaryColor
  // errorColor
  // successColor
  darkColor: '#171717',
};

// TODO: Add routing
function App() {
  return (
    <ThemeProvider theme={DEFAULT_THEME}>
      <div className="App" />
      <ConverterApp />
    </ThemeProvider>
  );
}

export default App;

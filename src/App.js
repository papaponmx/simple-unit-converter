import React from 'react';

import Styletron from 'styletron-client';
import {styled, Provider as StyletronProvider} from 'styletron-react';


import './App.css';
import ConverterApp from './converter-app';

// TODO: Add routing
function App() {
  return (
    <StyletronProvider styletron={Styletron}>
      <div className="App">
        <ConverterApp />
      </div>
    </StyletronProvider>
  );
}

export default App;

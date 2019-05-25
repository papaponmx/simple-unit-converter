import React, { createContext, useState } from 'react';

import initialState from './initialState';

export const Context = createContext();

// TODO: Define the actions to implement and how the state should be mutated
// https://codesandbox.io/s/5xw1jl721l?from-embed
/**
 *
 const convertUnit = () => {
   selectedMag;

   return setUnitOutput(convertedUnit);
  };
 */


export const Provider = ({ children }) => { // eslint-disable-line
  // Use state to keep the values


  const [magnitudes, setMagnitude] = useState(initialState.magnitudes);
  const [selectedMagnitude, setSelectedMagnitude] = useState(initialState.magnitudes[0]);

  // TODO: Define default input values
  // const [unitInput, setUnitInput] = useState(1);

  const magnitudesContext = {
    magnitudes,
    setMagnitude,
    selectedMagnitude,
    setSelectedMagnitude,
  };

  return (
    <Context.Provider value={magnitudesContext}>
      {children}
    </Context.Provider>
  );
};


export const { Consumer } = Context;

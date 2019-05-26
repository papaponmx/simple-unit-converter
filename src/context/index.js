import React, { createContext, useState } from 'react';

import initialContext from './initialContext';

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
  const [magnitudes, setMagnitude] = useState(initialContext.magnitudes);
  const [selectedMagnitude, setSelectedMagnitude] = useState(initialContext.magnitudes[0]);
  const [inputUnit, setInputUnit] = useState(initialContext.magnitudes[0].units[0]);
  const [inputValue, setInputValue] = useState();

  // TODO: Define default input values

  const magnitudesContext = {
    inputUnit,
    inputValue,
    magnitudes,
    selectedMagnitude,
    setInputUnit,
    setInputValue,
    setMagnitude,
    setSelectedMagnitude,
  };

  return (
    <Context.Provider value={magnitudesContext}>
      {children}
    </Context.Provider>
  );
};


export const { Consumer } = Context;

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
  const [sourceUnit, setSourceUnit] = useState(initialContext.magnitudes[0].units[0]);
  const [sourceInputValue, setSourceInputValue] = useState();
  const [targetUnit, setTargetUnit] = useState(initialContext.magnitudes[0].units[0]);
  const [targetInputValue, setTargetInputValue] = useState();

  const magnitudesContext = {
    magnitudes,
    selectedMagnitude,
    setMagnitude,
    setSelectedMagnitude,
    setSourceInputValue,
    setSourceUnit,
    setTargetInputValue,
    setTargetUnit,
    sourceInputValue,
    sourceUnit,
    targetInputValue,
    targetUnit,
  };

  return (
    <Context.Provider value={magnitudesContext}>
      {children}
    </Context.Provider>
  );
};


export const { Consumer } = Context;

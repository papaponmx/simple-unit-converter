import React, { createContext, useState } from 'react';

export const Context = createContext()




export const Provider = ({
  children,
  // TODO: Define  initialState as props to provider
  magnitudes: InitialMagnitudes,
  selectedMagnitude: InitialSelectedMagnitude,
  unitToConvert: InitialUnitToConvert,
}) => {

  // Use state to keep the values
  const [ magnitudes, setMagnitude ] = useState(InitialMagnitudes);
  const [ selectedMagnitude, setSelectedMagnitude ] = useState(InitialSelectedMagnitude);
  const [ unitInput, setUnitInput ] = useState(InitialUnitInput)

  // TODO: Define the actions to implement and how the state should be mutated
  // https://codesandbox.io/s/5xw1jl721l?from-embed
  const convertUnit = (userInput) => {
    selectedMag

    return setUnitOutput(convertedUnit)
  }


  return <Context.Provider value={magnitudesContext}
};


export const { Consumer } = Context;

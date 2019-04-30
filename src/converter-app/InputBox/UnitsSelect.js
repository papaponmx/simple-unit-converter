import React from 'react';

// eslint-disable-next-line
const UnitsSelect = ({ selectedMagnitude = options[0] }) => {
  console.log(selectedMagnitude); // eslint-disable-line

  // TODO: Connect values from selected MAGNITUDE
  return (
    <label aria-label="Choose a unit" htmlFor="unit-select"> {/* eslint-disable-line */}
      <select name="inputUnit" id="unit-select">
        <option value="kg">kg</option>
        <option value="lbs">lbs</option>
      </select>
    </label>
  );
};

export default UnitsSelect;

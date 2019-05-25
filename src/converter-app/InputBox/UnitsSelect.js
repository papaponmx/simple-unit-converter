import React, { useContext } from 'react';
import { Context as MagnitudesContext } from '../../context';

const UnitsSelect = () => {
  const { selectedMagnitude } = useContext(MagnitudesContext);
  const { units } = selectedMagnitude;

  return (
    <label aria-label="Choose a unit" htmlFor="unit-select"> {/* eslint-disable-line */}
      <select name="inputUnit" id="unit-select">
        {
          units.map(({ name }) => (
            <option key={name} value={name}>{name}</option>
          ))
        }
      </select>
    </label>
  );
};

export default UnitsSelect;

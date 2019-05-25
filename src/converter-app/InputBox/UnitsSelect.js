import React, { useContext } from 'react';
import { Context as MagnitudesContext } from '../../context';
import Select from '../../Forms/select';

const UnitsSelect = () => {
  const { selectedMagnitude } = useContext(MagnitudesContext);
  const { units } = selectedMagnitude;

  return (
    <label aria-label="Choose a unit" htmlFor="unit-select"> {/* eslint-disable-line */}
      <Select name="inputUnit" id="unit-select">
        {
          units.map(({ name }) => (
            <option key={name} value={name}>{name}</option>
          ))
        }
      </Select>
    </label>
  );
};

export default UnitsSelect;

import React, { useContext } from 'react';
import { Context as MagnitudesContext } from '../../context';
import Select, { Option } from '../../Forms/select';

const UnitsSelect = () => {
  const { selectedMagnitude, setInputUnit } = useContext(MagnitudesContext);
  const { units } = selectedMagnitude;

  const handleSelect = (event) => {
    // IDEA: Move this function into a getters file
    const selectedInputUnit = units.find(unit => unit.name === event.target.value);
    return setInputUnit(selectedInputUnit);
  };

  return (
    <Select
      aria-label="Choose a unit"
      id="unit-select"
      name="inputUnit"
      onChange={handleSelect}
    >
      {
      units.map(({ name }) => (
        <Option key={name} value={name}>
          {name}
        </Option>
      ))
      }
    </Select>
  );
};

export default UnitsSelect;

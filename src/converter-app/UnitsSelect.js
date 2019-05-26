import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Context as MagnitudesContext } from '../context';
import Select, { Option } from '../Forms/select';

const UnitsSelect = ({ isOutput = false }) => {
  const {
    inputUnit,
    selectedMagnitude,
    setInputUnit,
  } = useContext(MagnitudesContext);
  const { units } = selectedMagnitude;

  const handleSelect = (event) => {
    // IDEA: Move this function into a getters file
    const selectedInputUnit = units.find(unit => unit.name === event.target.value);
    return setInputUnit(selectedInputUnit);
  };

  const renderOptions = () => {
    const options = isOutput
      ? units.filter(unit => unit.name !== inputUnit.name)
      : units;

    return options.map(({ name }) => (
      <Option key={name} value={name}>
        {name}
      </Option>
    ));
  };

  return (
    <Select
      aria-label="Choose a unit"
      id="unit-select"
      name="inputUnit"
      onChange={handleSelect}
    >
      {renderOptions()}
    </Select>
  );
};

UnitsSelect.defaultProps = {
  isOutput: false,
};

UnitsSelect.propTypes = {
  isOutput: PropTypes.bool,
};

export default UnitsSelect;

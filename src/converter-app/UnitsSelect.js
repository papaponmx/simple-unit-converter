import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Context as MagnitudesContext } from '../context';
import Select, { Option } from '../Forms/select';
import { transformUnit } from '../utils';

const UnitsSelect = ({ isOutput = false }) => {
  const {
    selectedMagnitude,
    setSourceInputValue,
    setSourceUnit,
    setTargetInputValue,
    setTargetUnit,
    sourceInputValue,
    sourceUnit,
    targetInputValue,
    targetUnit,
  } = useContext(MagnitudesContext);
  const { units } = selectedMagnitude;

  const handleSelect = (event) => {
    // IDEA: Move this function into a getters file
    const selectedsourceUnit = units.find(unit => unit.name === event.target.value);
    if (selectedsourceUnit.name === targetUnit.name) {
      setTargetUnit(units.find(unit => unit.name !== event.target.value));

      // Refresh input values
      setSourceInputValue(
        transformUnit(
          sourceInputValue,
          sourceUnit.name,
          targetUnit.name,
        ),
      );
      setTargetInputValue(
        transformUnit(
          targetInputValue,
          targetUnit.name,
          sourceUnit.name,
        ),
      );
    }

    return setSourceUnit(selectedsourceUnit);
  };

  const renderOptions = () => {
    const options = isOutput
      ? units.filter(unit => unit.name !== sourceUnit.name)
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
      name="sourceUnit"
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

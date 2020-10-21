import React, { useContext } from 'react';
import { Context as MagnitudesContext } from '../../context';
import Select, { Option } from '../../Forms/select';

const renderOptions = (magnitudes) => magnitudes.map((magnitude) => (
  <Option key={magnitude.name} value={magnitude.name}>
    {magnitude.name}
  </Option>
));

const MagnitudeSelect = () => {
  const { magnitudes, setSelectedMagnitude } = useContext(MagnitudesContext);

  // IDEA: Move this function into a getters file
  const handleSelect = (event) => {
    const selected = magnitudes.find((magnitude) => magnitude.name === event.target.value);
    return setSelectedMagnitude(selected);
  };

  return (
    <label aria-label="Magnitude" htmlFor="magnitude-select">{/* eslint-disable-line */}
      <Select
        onChange={handleSelect}
        id="magnitude-select"
        name="magnitude"
      >
        {
          renderOptions(magnitudes, setSelectedMagnitude)
        }
      </Select>
    </label>
  );
};

export default MagnitudeSelect;

import React, { useContext } from 'react';
import { Context as MagnitudesContext } from '../../context';
import Select, { Option } from '../../Forms/select';

const renderOptions = (magnitudes, setSelectedMagnitude) => magnitudes.map(magnitude => (
  <Option
    key={magnitude.name}
    value={magnitude.name}
    onClick={() => setSelectedMagnitude(magnitude)}
  >
    {magnitude.name}
  </Option>
));


const MagnitudeSelect = () => {
  const { magnitudes, setSelectedMagnitude } = useContext(MagnitudesContext);

  return (
    <label aria-label="Magnitude" htmlFor="magnitude-select">{/* eslint-disable-line */}
      <Select id="magnitude-select" name="magnitude">
        {
          renderOptions(magnitudes, setSelectedMagnitude)
        }
      </Select>
    </label>
  );
};

export default MagnitudeSelect;

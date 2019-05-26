import React, { useContext } from 'react';
import { Context as MagnitudesContext } from '../../context';
import Select, { Option } from '../../Forms/select';

const MagnitudeSelect = () => {
  const { magnitudes } = useContext(MagnitudesContext);

  return (
  // TODO: Add event handlers so it updates MAGNITUDE
    <label aria-label="Magnitude" htmlFor="magnitude-select">{/* eslint-disable-line */}
      <Select name="magnitude" id="magnitude-select">
        {
          magnitudes.map(({ name }) => (
            <Option key={name} value={name}>{name}</Option>
          ))
        }
      </Select>
    </label>
  );
};

export default MagnitudeSelect;

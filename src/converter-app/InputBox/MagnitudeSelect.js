import React from 'react';

import Select from '../../Forms/select';

// eslint-disable-next-line
const MagnitudeSelect = ({ options }) => {
  console.log('options are', options);
  return (
  // TODO: Add event handlers so it updates MAGNITUDE
    <label aria-label="Magnitude" htmlFor="magnitude-select">{/* eslint-disable-line */}
      <Select name="magnitude" id="magnitude-select">
        {
          options.map(({ name }) => (
            <option value={name}>{name}</option>
          ))
        }
      </Select>
    </label>
  );
};

export default MagnitudeSelect;
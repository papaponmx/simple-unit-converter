/**
 * TargetInput
 */

import React, { useContext } from 'react';
import { Input } from '../SourceBox/SourceInput';
import { Context as MagnitudesContext } from '../../context';


const TargetInput = () => {
  const { targetInputValue = '0.45', setTargetInputValue } = useContext(MagnitudesContext);
  const handleChange = event => console.log(event.target.value)
  || setTargetInputValue(event.target.value);

  return (
    <div>
      <Input
        aria-label="Source"
        id="sourceInput"
        inputMode="decimal"
        name="sourceInput"
        onChange={handleChange}
        pattern="[0-9]+(\.[0-9]{0,2})?%?"
        type="text"
        value={targetInputValue}
      />
      { targetInputValue }
    </div>
  );
};

export default TargetInput;

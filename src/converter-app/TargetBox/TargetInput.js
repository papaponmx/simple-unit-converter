/**
 * TargetInput
 */

import React, { useContext } from 'react';
import { Input } from '../SourceBox/SourceInput';
import { Context as MagnitudesContext } from '../../context';
import { transformUnit } from '../../utils';

const TargetInput = () => {
  const {
    targetInputValue = '0.45',
    setTargetInputValue,
    setSourceInputValue,
    sourceUnit,
    targetUnit,
  } = useContext(MagnitudesContext);

  const handleChange = event => setTargetInputValue(event.target.value)
  || setSourceInputValue(
    transformUnit(
      event.target.value,
      sourceUnit.name,
      targetUnit.name,
    ),
  );


  /**
 * IDEA: Rethink what I am doing on line 23 and 24, since I'm
 * toggling the order of the params.
 */

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
    </div>
  );
};

export default TargetInput;

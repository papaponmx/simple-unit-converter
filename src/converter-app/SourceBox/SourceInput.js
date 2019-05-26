import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context as MagnitudesContext } from '../../context';
import { transformUnit } from '../../utils';

export const Input = styled.input`
  color: ${props => props.theme.lightColor};
  border: none;
  background-color: rgba(155, 155, 155, 0.2);
  font-size: 1.2rem;
  text-align: center;
  padding: 1rem;
  margin: 1rem;
`;

const SourceInput = () => {
  const {
    setSourceInputValue,
    setTargetInputValue,
    sourceInputValue = 1,
    sourceUnit,
    targetUnit,
  } = useContext(MagnitudesContext);

  const handleChange = event => setSourceInputValue(event.target.value) || setTargetInputValue(
    transformUnit(
      event.target.value,
      targetUnit.name,
      sourceUnit.name,
    ),
  );

  return (
    <Input
      aria-label="Source"
      id="sourceInput"
      inputMode="decimal"
      name="sourceInput"
      onChange={handleChange}
      pattern="[0-9]+(\.[0-9]{0,2})?%?"
      type="text"
      value={sourceInputValue}
    />
  );
};

export default SourceInput;

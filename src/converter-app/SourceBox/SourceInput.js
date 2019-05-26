import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context as MagnitudesContext } from '../../context';


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
  const { sourceInputValue = 1, setSourceInputValue } = useContext(MagnitudesContext);
  const handleChange = event => setSourceInputValue(event.target.value);

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

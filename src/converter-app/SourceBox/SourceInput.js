import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context as MagnitudesContext } from '../../context';


const Input = styled.input`
  color: ${props => props.theme.lightColor};
  border: none;
  background-color: rgba(155, 155, 155, 0.2);
  font-size: 1.2rem;
  text-align: center;
  padding: 1rem;
  margin: 1rem;
`;

const SourceInput = () => {
  const { inputValue = 1, setInputValue } = useContext(MagnitudesContext);
  const handleChange = event => setInputValue(event.target.value);

  return (
    <Input
      aria-label="Source"
      id="sourceInput"
      inputMode="decimal"
      name="sourceInput"
      onChange={handleChange}
      type="number"
      value={inputValue}
    />
  );
};

export default SourceInput;

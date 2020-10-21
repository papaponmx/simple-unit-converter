import styled from 'styled-components';

// Styled forms
const Select = styled.select`
  background: transparent;
  border: none;
  color: white;
  font-size: 2rem;
  font-weight: 700;
  padding: 0.4rem;
  text-transform: capitalize;
  /* ... */
`;

export const Option = styled.option`
  color: ${(props) => props.theme.lightColor};
  background-color: ${(props) => props.theme.darkColor};
`;

export default Select;

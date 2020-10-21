import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.lightColor};
  display: flex;
  padding: 0.25rem 0.5rem;
  /* ... */
`;

export default function () {
  return (
    <Header>
      <h1>Simple Unit Converter</h1>
    </Header>
  );
}

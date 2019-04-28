import React from 'react'
import styled from 'styled-components'
import { DEFAULT_THEME as theme } from '../App'
/** This is the app header */

const Header = styled.header`
  background-color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.lightColor};
  display: flex;
  /* ... */
`;



export default function () {
  return (
    <Header>
    {
      // <span>TODO: Add hamburguer menu</span>

    }
      <h1>Simple Unit Converter</h1>
     {
      //  <span>TODO: Add Icon</span>
     }
    </Header>
  )
}

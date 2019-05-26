/**
 * In this file is the main
 * app component
 */

import React from 'react';
import styled from 'styled-components';

import Header from '../app-header';
import InputBox, { Container } from './SourceBox';


/**
 * STYLED
 */


const PrimaryBox = styled.div`
  background-color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.lightColor};
`;


/**
 * CONVERSIONS DATA
 */

export const options = [
  {
    name: 'weight',
    units: [
      'kg',
      'lbs',
    ],
  },
  {
    name: 'distance',
  },
  {
    name: 'height',
  },
  {
    name: 'volume',
  },
];
/**
 * FORMS
 */


/**
 * REGULAR COMPONENTS
 */

const OutputBox = () => (
  <PrimaryBox>
    <Container>
      Output
    </Container>
  </PrimaryBox>

);


export default function ConverterApp() {
  return (
    <div>
      <Header />
      <InputBox />
      <OutputBox />
    </div>
  );
}

/**
 * In this file is the main
 * app component
 */

import React from 'react';
import styled from 'styled-components';

import Header from '../app-header';


/**
 * STYLED
 */

const Container = styled.div`
  height: 40vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DarkBox = styled.div`
  background-color: ${props => props.theme.darkColor};
  color: ${props => props.theme.lightColor};
`;

const PrimaryBox = styled.div`
  background-color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.lightColor};
`;


/**
 * REGULAR COMPONENTS
 */


const InputBox = () => (
  <DarkBox>
    <Container>

      Input
    </Container>
  </DarkBox>
);

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

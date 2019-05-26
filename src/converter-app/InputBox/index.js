/**
 * InputBox
 */

import React from 'react';
import styled from 'styled-components';

import MagnitudeSelect from './MagnitudeSelect';
import SourceInput from './SourceInput';
import UnitsSelect from './UnitsSelect';

import { options } from '../index';

export const Container = styled.div`
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

const InputBox = () => (
  <DarkBox>
    <Container>
      <MagnitudeSelect />
      <SourceInput />
      <UnitsSelect selectedMagnitude={options[0]} />
    </Container>
  </DarkBox>
);

export default InputBox;

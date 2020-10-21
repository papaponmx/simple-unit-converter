/*
 * TargetBox
 */

import React from 'react';
import styled from 'styled-components';

import { Container } from '../SourceBox';
import UnitsSelect from '../UnitsSelect';
import TargetInput from './TargetInput';

const PrimaryBox = styled.div`
 background-color: ${(props) => props.theme.primaryColor};
 color: ${(props) => props.theme.lightColor};
`;

const TargetBox = () => (
  <PrimaryBox>
    <Container>
      <TargetInput />
      <UnitsSelect isOutput />
    </Container>
  </PrimaryBox>

);

export default TargetBox;

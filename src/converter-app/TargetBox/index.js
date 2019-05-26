/*
 * TargetBox
 */

import React from 'react';
import styled from 'styled-components';

import { Container } from '../SourceBox';


/**
 * STYLED
 */


const PrimaryBox = styled.div`
 background-color: ${props => props.theme.primaryColor};
 color: ${props => props.theme.lightColor};
`;

const TargetBox = () => (
  <PrimaryBox>
    <Container>
     Output
    </Container>
  </PrimaryBox>

);

export default TargetBox;

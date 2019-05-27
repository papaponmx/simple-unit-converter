/**
 * In this file is the main
 * app component
 */

import React from 'react';
import styled from 'styled-components';

import Header from '../app-header';
import SourceBox from './SourceBox';
import TargetBox from './TargetBox';

const Div = styled.section`
  height: 100vh;
  overflow: hidden;
  width: 100vw;
`;

export default function ConverterApp() {
  return (
    <Div>
      <Header />
      <SourceBox />
      <TargetBox />
    </Div>
  );
}

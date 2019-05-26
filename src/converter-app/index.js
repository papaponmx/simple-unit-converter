/**
 * In this file is the main
 * app component
 */

import React from 'react';

import Header from '../app-header';
import SourceBox from './SourceBox';
import TargetBox from './TargetBox';

export default function ConverterApp() {
  return (
    <div>
      <Header />
      <SourceBox />
      <TargetBox />
    </div>
  );
}

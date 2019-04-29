/**
 * In this file is the main
 * app component
 */

import React from 'react';
import styled from 'styled-components';

import Header from '../header';


const InputBox = () => (
  <div>
   Input
  </div>
);

const OutputBox = () => (
  <div>
    Output
  </div>

);


export default function ConverterApp() {
  return (
    <div>
      <Header />
      <InputBox />
      <OutputBox />
      <h3>Hello there</h3>
    </div>
  );
}

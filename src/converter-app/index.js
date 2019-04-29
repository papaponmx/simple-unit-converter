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


// Styled forms

const Select = styled.select`
  background: transparent;
  border: none;
  color: white;
  font-size: 2rem;
  font-weight: 700;
  padding: 0.4rem;
  text-transform: capitalize;
  /* ... */
`;


/**
 * CONVERSIONS DATA
 */

const options = [
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


// eslint-disable-next-line
const MagnitudeSelect = ({ options }) => {
  console.log('options are', options);
  return (
  // TODO: Add event handlers so it updates MAGNITUDE
    <label aria-label="Magnitude" htmlFor="magnitude-select">{/* eslint-disable-line */}
      <Select name="magnitude" id="magnitude-select">
        {
          options.map(({ name }) => (
            <option value={name}>{name}</option>
          ))
        }
      </Select>
    </label>
  );
};

// eslint-disable-next-line
const UnitsSelect = ({ selectedMagnitude = options[0] }) => {
  console.log(selectedMagnitude); // eslint-disable-line

  // TODO: Connect values from selected MAGNITUDE
  return (
    <label aria-label="Choose a unit" htmlFor="unit-select"> {/* eslint-disable-line */}
      <select name="inputUnit" id="unit-select">
        <option value="kg">kg</option>
        <option value="lbs">lbs</option>
      </select>
    </label>
  );
}
;

/**
 * REGULAR COMPONENTS
 */


const InputBox = () => (
  <DarkBox>
    <Container>
      <MagnitudeSelect options={options} />
      {
        /**
         * Input
         */
      }
      <UnitsSelect selectedMagnitude={options[0]} />
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

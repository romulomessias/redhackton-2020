import { useState } from "react";
import styled from "styled-components";

// components
import SquareButton from '../../../components/SquareButton'

const FormGrid = styled.div`
  align-items: start;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 5px;
  grid-column-gap: 6.14%;
  margin: 0;
  padding: 0;

  & div:nth-of-type(1) {
    grid-column: 2 / span 2;
  }

  & div:nth-of-type(2) {
    grid-column: 4 / span 2;
  }

  & div:nth-of-type(3) {
    grid-column: 1 / span 2;
  }

  & div:nth-of-type(4) {
    opacity: 0;
    cursor: none; 
    grid-column: 3 / span 2;
  }

  & div:nth-of-type(5) {
    grid-column: 5 / span 2;
  }

  /* display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, minmax(200px, 1fr));
  grid-gap: 10px; */
`

export default function CrowdedLevelStep({ setStep }) {
  // slug 0
  // value: 1 baixo, 2 medio, 3 alto, 4 mto alto
  return (
    <FormGrid>
      <SquareButton>Baixo</SquareButton>
      <SquareButton>Medio</SquareButton>
      <SquareButton>None</SquareButton>
      <SquareButton>Alto</SquareButton>
    </FormGrid>
  );
}

import styled from "styled-components";

const FormGrid = styled.div`
  align-items: start;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 15px;
  margin: 0;
  padding: 0;

  @media(max-width: 600px) {
    display: flex;
    flex-direction: column;
  }

  & div:nth-of-type(1) {
    grid-column: 2 / span 2;
  }

  & div:nth-of-type(2) {
    grid-column: 4 / span 2;
  }

  & div:nth-of-type(3) {
    opacity: 0;
    cursor: none; 
    grid-column: 1 / span 2;

    @media(max-width: 600px) {
      display: none;
    }
  }

  & div:nth-of-type(4) {
    grid-column: 3 / span 2;
  }

  & div:nth-of-type(5) {
    grid-column: 5 / span 2;
  }
`

export default FormGrid
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Container } from "../styles/pages/Index.styled";

// components
import Title from '../components/Title'
import Input from '../components/Input'
import Button from '../components/Button'

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`

const StyledButton = styled(Button)`
  position: fixed;
  bottom: 40px;
`

export default function SearchZone() {
  const [value, setValue] = useState('')

  useEffect(() => {
    console.log("input value", value)
  }, [value])

  return (
    <Container>
      <Main>
        <Title>Onde é sua zona eleitoral?</Title>
        <Input label="Nº da Zona" onChange={setValue} />
        <StyledButton>Buscar Zona Eleitoral</StyledButton>
      </Main>
    </Container>
  );
}

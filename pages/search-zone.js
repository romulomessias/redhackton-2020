import { useState, useEffect } from "react";
import styled from "styled-components";
import { Container } from "../styles/pages/Index.styled";
import { useDispatch } from '../stores/store'

// components
import Title from '../components/Title'
import Input from '../components/Input'
import Button from '../components/Button'

const Main = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`

const StyledButton = styled(Button)`
  position: fixed;
  bottom: 40px;
`

const StyledCenterArea = styled.div`
  margin-top: 170px;
`

export default function SearchZone() {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    localStorage.removeItem('zone')
  }, [])

  const searchZone = () => {
    if (value) {
      localStorage.setItem('zone', value)
      dispatch({ type: 'SET_ZONE', zone: value })
    }
  }

  return (
    <Container>
      <Main>
        <StyledCenterArea>
          <Title>Onde é sua zona eleitoral?</Title>
          <Input label="Nº da Zona" onChange={setValue} value={value} />
        </StyledCenterArea>
        <StyledButton onClick={searchZone}>Buscar Zona Eleitoral</StyledButton>
      </Main>
    </Container>
  );
}

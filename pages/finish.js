import { Container } from "../styles/pages/Index.styled";
import styled from "styled-components";

// components
import Title  from '../components/Title'

const Main = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 20px 0;
`

export default function Finish() {
  return (
    <Container>
      <Main>
        <Title>Obrigado pela contribuição!</Title>
      </Main>
    </Container>
  )
}
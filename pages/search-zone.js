import { useState } from "react";
import styled from "styled-components";
import { Container } from "../styles/pages/Index.styled";
import { useDispatch } from "../stores/store";

// components
import Title from "../components/Title";
import Input from "../components/Input";
import Button from "../components/Button";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const StyledButton = styled(Button)`
  position: fixed;
  bottom: 40px;
  box-sizing: border-box;
  height: 80px;
  width: 100%;
  border: 0px;
  border-radius: 4px;
  // background-color: #e9e9e9;

  color: #fff;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 24px;
  text-align: center;
  background-color: #0006ff;
  text-transform: uppercase;
`;

export default function SearchZone() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const searchZone = () => {
    if (value) {
      dispatch({ type: "SET_ZONE", zone: value });
    }
  };

  return (
    <Container>
      <Main>
        <Title>Onde é sua zona eleitoral?</Title>
        <Input label="Nº da Zona" onChange={setValue} value={value} />
        <StyledButton onClick={searchZone}>Buscar Zona Eleitoral</StyledButton>
      </Main>
    </Container>
  );
}

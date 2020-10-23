import { useState, useEffect } from "react";
import styled from "styled-components";
import { Container } from "../styles/pages/Index.styled";
import { useDispatch } from "../stores/store";
import { useRouter } from 'next/router'
import { getZones, getZonesStatus } from "../services/zones";

// components
import Title from "../components/Title";
import Input from "../components/Input";
import Button from "../components/Button";

const Main = styled.main`
  min-height: 100vh;
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

const StyledCenterArea = styled.div`
  margin-top: 170px;
`

export default function SearchZone() {
  const router = useRouter()
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.removeItem('zone')
  }, [])

  const onSearchZone = () => {
    if (value) {
      localStorage.setItem('zone', value)
      dispatch({ type: 'SET_ZONE', zone: value })
    }

    getZonesStatus(value).then((res) => {
      console.log("ress", res)
      if (res && res.status === 'none') {
        router.push('/status')
      } else {
        router.push('/situacao')
      }
    });
  };

  return (
    <Container>
      <Main>
        <StyledCenterArea>
          <Title>Onde é sua zona eleitoral?</Title>
          <Input label="Nº da Zona" onChange={setValue} value={value} />
        </StyledCenterArea>
        <StyledButton onClick={onSearchZone}>Buscar Zona Eleitoral</StyledButton>
      </Main>
    </Container>
  );
}

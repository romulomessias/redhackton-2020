import Head from "next/head";
import { useMap } from "../utils/initMap";
import { Container } from "../styles/pages/Index.styled";
import { useLocation } from "../hooks/useLocation";
import CurrentLocationName from "../components/CurrentLocationName";
import Map from "../components/Map";
import styled from "styled-components";
import { getZones } from "../services/zones";
import Button from "../components/Button";
import { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";

const Title = styled.h2`
  height: 110px;
  margin: 0;
  margin-bottom: 16px;
  width: 378.89px;
  font-family: Avenir;
  font-size: 40px;
  font-weight: 900;
  letter-spacing: 0;
  line-height: 55px;
  text-align: center;
`;

const ZoneButton = styled(Button)`
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

const ButtonArea = styled.div`
  // padding: 16px;
`;

export default function Home() {
  const { coords } = useLocation();
  const [zones, setZones] = useState([]);

  useEffect(() => {
    getZones().then((res) => {
      setZones(res);
    });
  }, []);

  const router = useRouter();

  const handleOnclick = () => {
    router.push("search-zone");
  };

  return (
    <Fragment>
      <Head>
        <title>Zonas Eleitorais</title>
      </Head>
      <Container>
        <CurrentLocationName coords={coords} />
        <Title>Zonas Eleitorais perdo de você</Title>
        <Map coords={coords} places={zones} />

        <ButtonArea>
          <ZoneButton onClick={handleOnclick}>Não voto nessa região</ZoneButton>
        </ButtonArea>
      </Container>
    </Fragment>
  );
}

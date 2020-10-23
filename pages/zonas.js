import { Fragment, useEffect, useState } from "react";
import Head from "next/head";
import initMap, { useMap } from "../utils/initMap";
import { Container } from "../styles/pages/zones.styled";
import { useLocation } from "../hooks/useLocation";
import CurrentLocationName from "../components/CurrentLocationName";
import Map from "../components/Map";
import styled from "styled-components";
import { getZones } from "../services/zones";

const H2 = styled.h2`
  padding: 16px;
`;

export default function Home() {
  const { coords } = useLocation();
  const [zones, setZones] = useState([]);

  useEffect(() => {
    getZones().then((res) => {
      setZones(res);
    });
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Zonas Eleitorais</title>
      </Head>
      <Container>
        <CurrentLocationName coords={coords} />
        <H2>Zonas Eleitorais perdo de você</H2>
        <Map coords={coords} places={zones} />
        <button>Não voto nessa região</button>
      </Container>
    </Fragment>
  );
}

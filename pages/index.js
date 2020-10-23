import Head from "next/head";
import { useMap } from "../utils/initMap";
import { Container } from "../styles/pages/Index.styled";
import { useLocation } from "../hooks/useLocation";

export default function Home() {
  const { coords, status } = useLocation();

  useMap(coords);

  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBGfHLZvMJ1hhXkMokajj22p_CP_M3MRFw"
          type="text/javascript"
        ></script>
      </Head>
      {status}
      {JSON.stringify(coords)}
      <main>
        <div id="map"></div>
      </main>
    </Container>
  );
}

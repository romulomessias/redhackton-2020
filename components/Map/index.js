import { useEffect } from "react";
import styled from "styled-components";
import { useMap } from "../../utils/initMap";
import { MapWrapper } from "./style";

const Map = ({ coords, places = [1] }) => {
  const { updateMarks } = useMap(coords);

  useEffect(() => {
    console.log("hello");
    updateMarks(places);
  }, [places]);

  return <MapWrapper id="map" />;
};

export default Map;

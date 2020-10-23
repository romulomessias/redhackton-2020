import { useEffect } from "react";
import styled from "styled-components";
import { useMap } from "../utils/initMap";

export const MapWrapper = styled.div`
  width: 100% !important;
  height: 100% !important;
  // min-height: 515px;
  flex-grow: 1;
`;

const Map = ({ coords, places = [1], ...props }) => {
  const { updateMarks } = useMap(coords);

  useEffect(() => {
    console.log("hello");
    updateMarks(places);
  }, [places]);

  return <MapWrapper id="map" {...props} />;
};

export default Map;

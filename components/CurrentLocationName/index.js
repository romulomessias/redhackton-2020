import { useEffect, useState } from "react";
import styled from "styled-components";

const useLocalName = (coords) => {
  const [details, setDetails] = useState("");
  useEffect(() => {
    fetch("https://geolocation-db.com/json/")
      .then((res) => res.json())
      .then((res) => {
        console.log(res, coords);

        setDetails(res);
      });
  }, []);

  return details;
};

const Container = styled.div`
  height: 48px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 8px;
`;

const CurrentLocationName = ({ coords }) => {
  const { city = "", state = "" } = useLocalName(coords);
  return (
    <Container>
      {city} / {state}
    </Container>
  );
};

export default CurrentLocationName;

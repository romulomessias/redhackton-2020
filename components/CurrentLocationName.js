import { useEffect, useState } from "react";
import styled from "styled-components";
import Room from "../public/icons/room.svg";

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
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 16px;
  color: #000000;
  font-family: Roboto;
  font-size: 20px;
  letter-spacing: 0;
  line-height: 24px;
`;

const Text = styled.div`
  margin-left: 8px;
`;

const CurrentLocationName = ({ coords }) => {
  const { city = "", state = "" } = useLocalName(coords);
  return (
    <Container>
      <Room />
      <Text>
        São Paulo / São Paulo
      </Text>
    </Container>
  );
};

export default CurrentLocationName;

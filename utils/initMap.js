import { useEffect, useState } from "react";

const initMap = () => {
  const uluru = { lat: -7.0707705, lng: -34.8451622 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    center: uluru,
  });

  return map;
};

export const useMap = (coords = uluru) => {
  const [map, setMap] = useState();

  useEffect(() => {
    const map = initMap();
    console.log(map)
    setMap(map);
  }, []);

  useEffect(() => {
    console.log("update map");
    if (map) {
      console.log(coords);
      map.setCenter(coords);
    } else {
      
    }
  }, [coords]);
};

export default initMap;

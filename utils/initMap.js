import { useEffect, useState } from "react";

const initMap = () => {
  const uluru = {
    lat: -23.5942,
    lng: -46.6836,
  };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    center: uluru,
  });

  return map;
};

export const useMap = (coords = uluru, marks = []) => {
  const [map, setMap] = useState();

  useEffect(() => {
    const map = initMap();
    setMap(map);
  }, []);

  useEffect(() => {
    if (map) {
      map.setCenter(coords);
    } else {
    }
  }, [coords]);

  function updateMarks(places = []) {
    console.log("updateMarks", { places, coords });

    places.forEach((element) => {
      const { zone_name = "", zone_long, zone_lat } = element;

      const myLatlng = {
        lat: zone_lat ,
        lng: zone_long ,
      };

      console.log(zone_name, myLatlng);

      const content = zone_name

      const infowindow = new google.maps.InfoWindow({
        content,
      });

      // if (zone_lat && zone_long) {
        const marker = new google.maps.Marker({
          map,
          position: myLatlng,
          title: zone_name,
        });

        marker.addListener("click", () => {
          infowindow.open(map, marker);
        });

        console.log("updateMarks", element, marker);
      // }
    });
  }

  return {
    updateMarks,
  };
};

export default initMap;

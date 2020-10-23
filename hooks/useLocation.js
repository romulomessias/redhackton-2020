import { useEffect, useState } from "react";

export const useLocation = () => {
  const [coords, setCoords] = useState({
    lat: -23.5942,
    lng: -46.6836,
  });

  const [status, setStatus] = useState("idle");

  function handleSuccess(position) {
    const { latitude, longitude } = position.coords;

    setCoords({
      lat: -23.5942,
      lng: -46.6836,
    });

    setStatus("allowed");
  }

  function handleError(error) {
    console.error(error);
    if (error.code === 1) {
      setStatus("denied");
    }
  }

  useEffect(() => {
    if ("geolocation" in navigator) {
      console.log("hello");
      navigator.geolocation.getCurrentPosition(handleSuccess, handleError, {
        enableHighAccuracy: true,
      });
    }
  }, []);

  return {
    status,
    coords,
  };
};

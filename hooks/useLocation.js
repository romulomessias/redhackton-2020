import { useEffect, useState } from "react";

export const useLocation = () => {
  const [coords, setCoords] = useState({
    lat: 0,
    lng: 0,
  });

  const [status, setStatus] = useState("idle");

  function handleSuccess(position) {
    const { latitude, longitude } = position.coords;
    console.log({ position });

    setCoords({
      lat: latitude,
      lng: longitude,
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

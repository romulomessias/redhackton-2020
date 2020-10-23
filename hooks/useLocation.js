import { useEffect, useState } from "react";

export const useLocation = () => {
  const [coords, setCoords] = useState({
    latitude: 0,
    longitude: 0,
  });

  const [status, setStatus] = useState("idle");

  const handleSuccess = (position) => {
    const { latitude, longitude } = position.coords;
    setCoords({
      latitude,
      longitude,
    });

    setStatus("allowed");
  };

  const handleError = (error) => {
    console.error(error);
    if (error.code === 1) {
      setStatus("denied");
    }
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
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

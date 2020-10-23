const initMap = () => {
  const uluru = { lat: -7.0707705, lng: -34.8451622 };
  const map = new google.maps.Map(
    document.getElementById('map'), { zoom: 17, center: uluru });
}

export default initMap
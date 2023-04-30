const API_KEY = "a161ffcd78a57e6b12b298812fb18411";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/3.0/onecall?
  lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  console.log(url);
  fetch(url);
}
function onGeoError() {
  alert("Can't find your location");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

const API_KEY = "a161ffcd78a57e6b12b298812fb18411";

function displayWeather(weather) {
  const tempInfo = document.getElementById("tempInfo");
  tempInfo.innerText = `Temperature: ${weather.temp}°C`;

  const humidityInfo = document.getElementById("humidityInfo");
  humidityInfo.innerText = `Humidity: ${weather.humidity}%`;

  const windSpeedInfo = document.getElementById("windSpeedInfo");
  windSpeedInfo.innerText = `Wind Speed: ${weather.wind_speed}m/s`;

  const latitude = document.getElementById("latitude");
  latitude.innerText = `Latitude: ${weather.lat.toFixed(2)}`;

  const longitude = document.getElementById("longitude");
  longitude.innerText = `Longitude: ${weather.lon.toFixed(2)}`;
}

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  console.log(url);

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = {
        temp: data.main.temp.toFixed(1),
        humidity: data.main.humidity,
        wind_speed: data.wind.speed.toFixed(1),
        lat: lat,
        lon: lon,
      };
      displayWeather(weather);
    });
}

function onGeoError() {
  alert("Can't find your location");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

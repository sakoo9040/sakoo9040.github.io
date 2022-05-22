const API_KEY = "7300e990dfbd71421946eaf395dce8ca";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log("You live in", lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      weather.innerText = `${data.weather[0].main}/${Math.floor(
        data.main.temp
      )}°`;
      city.innerText = `/${data.name}`;
    });
}
function onGeoError() {
  const weather = document.querySelector("#weather span:first-child");
  const city = document.querySelector("#weather span:last-child");
  weather.innerText = "Not found";
  city.innerText = "";
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

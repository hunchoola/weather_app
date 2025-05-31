const temperatureField = document.querySelector(".temp-value");
const locationField = document.querySelector(".location-name");
const dateField = document.querySelector(".location-time");
const conditionField = document.querySelector(".condition-text");
const searchField = document.querySelector(".search-input");
const form = document.querySelector("form");

form.addEventListener("submit", searchForLocation);

let target = "Ibadan";

const fetchResults = async (targetLocation) => {
  let url = `https://api.weatherapi.com/v1/current.json?key=c64138a0c289435e88a145520252105&q=${targetLocation}&aqi=no`;

  const res = await fetch(url);

  const data = await res.json();

  console.log(data);

  let locationName = data.location.name;
  let time = data.location.localtime;

  let temp = data.current.temp_c;

  let condition = data.current.condition.text;

  updateDetails(temp, locationName, time, condition);
};

function updateDetails(temp, locationName, time, condition) {
  temperatureField.innerHTML = temp;
  locationField.innerHTML = locationName;
  dateField.innerHTML = time;
  conditionField.innerHTML = condition;
}

function searchForLocation(e) {
  e.preventDefault();

  target = searchField.value;

  fetchResults(target);
}

fetchResults(target);

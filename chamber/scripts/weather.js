const temp = document.querySelector("#temp");
const description = document.querySelector("#description");
const icon = document.querySelector("#icon");

const dayOne = document.querySelector("#day-one");
const dayTwo = document.querySelector("#day-two");
const dayThree = document.querySelector("#day-three");
const tempOne = document.querySelector("#temp-one");
const descOne = document.querySelector("#desc-one");
const tempTwo = document.querySelector("#temp-two");
const descTwo = document.querySelector("#desc-two");
const tempThree = document.querySelector("#temp-three");
const descThree = document.querySelector("#desc-three");
const dateOne = document.querySelector("#date-one");
const dateTwo = document.querySelector("#date-two");
const dateThree = document.querySelector("#date-three");

const urlToday = "https://api.openweathermap.org/data/2.5/weather?lat=40.69&lon=-112.00&units=imperial&appid=88b882b7e6cb8fdb06fe774538b61685";

const urlForecast = "https://api.openweathermap.org/data/2.5/forecast?lat=40.69&lon=-112.00&units=imperial&appid=88b882b7e6cb8fdb06fe774538b61685";

const forecastOne = new Date(today);
forecastOne.setDate(today.getDate() + 1);
const forecastTwo = new Date(today);
forecastTwo.setDate(today.getDate() + 2);
const forecastThree = new Date(today);
forecastThree.setDate(today.getDate() + 3);

async function apiToday() {
  try {
    const response = await fetch(urlToday);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayWeather(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

async function apiForecast() {
  try {
    const response = await fetch(urlForecast);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayForecast(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayWeather(data) {
  temp.innerHTML = `${data.main.temp}&deg;F`;
  const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let info = data.weather[0].description;
  icon.setAttribute('src', iconSrc);
  description.textContent = `${info}`;
}

function displayForecast(data) {
  const day1 = data.list[2];
  const day2 = data.list[10];
  const day3 = data.list[18];

  tempOne.innerHTML = `${day1.main.temp}&deg;F`;
  descOne.textContent = `${day1.weather[0].description}`;
  tempTwo.innerHTML = `${day2.main.temp}&deg;F`;
  descTwo.textContent = `${day2.weather[0].description}`;
  tempThree.innerHTML = `${day3.main.temp}&deg;F`;
  descThree.textContent = `${day3.weather[0].description}`;
}

apiToday();
apiForecast();

dateOne.innerHTML = `${forecastOne.toLocaleDateString('en-us', {year: 'numeric', month: 'long', day: '2-digit'})}`;
dateTwo.innerHTML = `${forecastTwo.toLocaleDateString('en-us', {year: 'numeric', month: 'long', day: '2-digit'})}`;
dateThree.innerHTML = `${forecastThree.toLocaleDateString('en-us', { year: 'numeric', month: 'long', day: '2-digit' })}`;
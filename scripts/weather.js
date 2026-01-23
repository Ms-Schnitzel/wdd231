const icon = document.querySelector("#weather-icon");
const temp = document.querySelector("#current-temp");
const caption = document.querySelector("figcaption");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.76&lon=6.65&units=imperial&appid=88b882b7e6cb8fdb06fe774538b61685";

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

function displayResults(data) {
  temp.innerHTML = `${data.main.temp}&deg;F`;
  const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let info = data.weather[0].description;
  icon.setAttribute('src', iconSrc);
  icon.setAttribute('alt', 'weather-icon');
  caption.textContent = `${info}`;
}

apiFetch();
const year = document.querySelector("#currentYear");
const modified = document.querySelector("#lastModified");
const dateOne = document.querySelector("#date-one");
const dateTwo = document.querySelector("#date-two");
const dateThree = document.querySelector("#date-three");

const today = new Date();
let lastMod = new Date(document.lastModified);

const forecastOne = new Date(today);
forecastOne.setDate(today.getDate() + 1);
const forecastTwo = new Date(today);
forecastTwo.setDate(today.getDate() + 2);
const forecastThree = new Date(today);
forecastThree.setDate(today.getDate() + 3);

year.innerHTML = `${today.getFullYear()}`;
modified.innerHTML = `Last modified on: <span>${new Intl.DateTimeFormat(
  "en-US",
  {
    dateStyle: "medium"
  }
).format(lastMod)}</span>`;

dateOne.innerHTML = `${forecastOne.toLocaleDateString('en-us', {year: 'numeric', month: 'long', day: '2-digit'})}`;
dateTwo.innerHTML = `${forecastTwo.toLocaleDateString('en-us', {year: 'numeric', month: 'long', day: '2-digit'})}`;
dateThree.innerHTML = `${forecastThree.toLocaleDateString('en-us', {year: 'numeric', month: 'long', day: '2-digit'})}`;
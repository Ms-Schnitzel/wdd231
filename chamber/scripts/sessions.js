const welcome = document.querySelector("#welcome");

const timestamp = new Date().toISOString().split("T")[0];
console.log(timestamp);
let lastVisit;
if (localStorage.visit !== undefined) {
  lastVisit = new Date(localStorage.visit).toISOString().split("T")[0];console.log(localStorage.visi);
}

// lastVisit = '2026-01-31';

const oneDay = 1000 * 60 * 60 * 24;
const endDay = new Date(timestamp);
const startDay = new Date(lastVisit );
const diff = Math.round(Math.abs((startDay - endDay) / oneDay));
console.log(diff);

let day;

if (diff === 1) {
  day = "day";
} else {
  day = "days";
}


const first = "Welcome!  Please let us know if you have any questions.";
const frequent = "Back so soon!  Nice to see you again.";
const awhile = `Welcome back!  Your last visit was ${diff} ${day} ago.`;

if (localStorage.visit === undefined) {
  welcome.textContent = first;
  console.log(first);
}
else if (diff == 0) {
  welcome.textContent = frequent;
  console.log(frequent);
}
else {
  welcome.textContent = awhile;
  console.log(awhile);
}

localStorage.setItem('visit', timestamp);
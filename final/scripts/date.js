const year = document.querySelector("#currentYear");
// const modified = document.querySelector("#lastModified");

const today = new Date();
let lastMod = new Date(document.lastModified);

year.innerHTML = `${today.getFullYear()}`;
// modified.innerHTML = `Last modified on: <span>${new Intl.DateTimeFormat(
//   "en-US",
//   {
//     dateStyle: "medium"
//   }
// ).format(lastMod)}</span>`;


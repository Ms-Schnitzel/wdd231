const year = document.querySelector("#currentYear");

const today = new Date();
let lastMod = new Date(document.lastModified);

year.innerHTML = `${today.getFullYear()}`;
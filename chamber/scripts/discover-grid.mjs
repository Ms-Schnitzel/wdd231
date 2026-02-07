import {discoverArr} from '../data/discover.mjs';

const grid = document.querySelector("#discover-grid");

const displayCompany = (companies) => {
  companies.forEach((company) => {
    let card = document.createElement("section");
    card.innerHTML = `
      <h2>${company.name}</h2>
      <figure>
        <img src="${company.photo}" alt="${company.name}-pic" loading="lazy" style="width:300px">
      </figure>
      <address>${company.address}</address>
      <p>${company.description}</p>
      <button>Learn More</button>
    `
    grid.appendChild(card);
  });
}

displayCompany(discoverArr);
console.log(discoverArr);
const path = "./data/members.json";
const grid = document.querySelector("#grid");
const gridBtn = document.querySelector("#grid-btn");
const listBtn = document.querySelector("#list-btn");

async function getCompanyData() {
  const response = await fetch(path);
  const data = await response.json();
  console.table(data);
  displayCompany(data);
}

const displayCompany = (companies) => {
  companies.forEach((company) => {
    let card = document.createElement("section");
    card.classList.add("company-card")
    let name = document.createElement("h2");
    name.classList.add("name")
    let img = document.createElement("img");
    img.classList.add("company-img");
    let phone = document.createElement("h3");
    phone.classList.add("phone");
    let address = document.createElement("h3");
    address.classList.add("address");
    let url = document.createElement("h3");
    url.classList.add("url");
    let urlLink = document.createElement("a");
    let level = document.createElement("h3");
    level.classList.add("level");
    name.textContent = company.name;
    img.setAttribute('src', company.img);
    img.setAttribute('alt', `${company.name} building`);
    img.setAttribute('loading', 'lazy');
    // img.setAttribute('width', '290');
    // img.setAttribute('height', company.img);
    phone.textContent = company.phone;
    address.textContent = company.address;
    urlLink.textContent = company.url;
    urlLink.setAttribute('href', company.url);
    url.appendChild(urlLink);
    level.textContent = `Company Community Level: ${company.level}`;
    card.appendChild(name);
    card.appendChild(img);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(url);
    card.appendChild(level);
    grid.appendChild(card);
  });
}

gridBtn.addEventListener("click", function () {
  grid.classList.add("grid-view");
  grid.classList.remove("list-view");
});

listBtn.addEventListener("click", function () {
  grid.classList.remove("grid-view");
  grid.classList.add("list-view");
});


getCompanyData();
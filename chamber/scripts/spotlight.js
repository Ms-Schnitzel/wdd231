const path = "./data/members.json";
const spotlight = document.querySelector("#spotlight ul");

// let compIndex;

async function getCompanyData() {
  const response = await fetch(path);
  const data = await response.json();
  console.table(data);
  // compIndex = data.length;
  displayCompanies(data);
}

const getRandom = (max) => {
  return Math.floor(Math.random() * max);
}

const displayCompanies = (data) => {
  // let comp1 = data[getRandom(data.length)];
  // while (comp1.level === "Bronze") {
  //   comp1 = data[getRandom(data.length)];
  // }
  // let comp2 = data[getRandom(data.length)];
  // while (comp2.level === "Bronze") {
  //   comp2 = data[getRandom(data.length)];
  //   while (comp2 === comp1) {
  //     comp2 = data[getRandom(data.length)];
  //   }
  // }
  let comp1;
  let comp2;
  do {
    comp1 = data[getRandom(data.length)];
  } while (comp1.level === "Bronze");

  do {
    comp2 = data[getRandom(data.length)];
  } while (comp2 === comp1 || comp2.level === "Bronze");
  
  createCompCard(comp1);
  createCompCard(comp2);
}

const createCompCard = (company) => {
  let card = document.createElement("li");
  card.classList.add("sub-card");
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
  spotlight.appendChild(card);
}

getCompanyData();
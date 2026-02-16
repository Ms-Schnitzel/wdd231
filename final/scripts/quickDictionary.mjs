let history = JSON.parse(localStorage.getItem("history") || "[]");
let study = JSON.parse(localStorage.getItem("study") || "[]");

const quickForm = document.querySelector(".quick-form");
const search = document.querySelector("#quick-search");
const quickDisplay = document.querySelector("#quick-display");
const studyDisplay = document.querySelector("#study-display");
const recentDisplay = document.querySelector("#recent-display");
const clearSearch = document.querySelector("#clear-search");
const clearRecent = document.querySelector("#clear-recent");

async function getData(word) {
  try {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    if (response.ok) {
      const data = await response.json();
      history.push(data);
      localStorage.setItem("history", JSON.stringify(history));
      quickDisplay.innerHTML = "";
      createDisplay(data, quickDisplay);
      showRecent();
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}


quickForm.addEventListener("submit", function (e) {
  e.preventDefault();
  getData(search.value);
  search.value = "";
});
clearSearch.addEventListener("click", function (e) {
  e.preventDefault();
  quickDisplay.innerHTML = "";
});
clearRecent.addEventListener("click", function (e) {
  e.preventDefault();
  localStorage.removeItem("history");
  recentDisplay.innerHTML = "";
});


const createDisplay = (def, parent) => {

  for (let i = 0; i < 2; i++) {
    if (def[i] === undefined) {
      return;
    }
    let wordBox = document.createElement("div");
    wordBox.classList.add("word-box");
    let name = document.createElement("h3");
    name.textContent = def[i].word;
    wordBox.appendChild(name);
    def[i].meanings.forEach(function (j) {
      let speech = document.createElement("h4");
      speech.textContent = `Part of Speech: `;
      let speechCont = document.createElement("p");
      speechCont.textContent = j.partOfSpeech;
      wordBox.append(speech, speechCont);
      for (let k = 0; k < 3; k++) {
        if (j.definitions[k] === undefined) {
          return;
        }
        let definition = document.createElement("h4");
        definition.textContent = `Definition: `;
        let definitionCont = document.createElement("p");
        definitionCont.textContent = j.definitions[k].definition
        wordBox.append(definition, definitionCont);
      }
      let divider = document.createElement("hr");
      wordBox.appendChild(divider);
    })
    parent.appendChild(wordBox);
  }
}

const showRecent = () => {
  recentDisplay.innerHTML = "";
  let first = history.at(-1);
  let second = history.at(-2);
  let third = history.at(-3);
  console.log(first);
  if (first !== undefined) {
    createDisplay(first, recentDisplay);
  }
  if (second !== undefined) {
    createDisplay(second, recentDisplay);
  }
  if (third !== undefined) {
    createDisplay(third, recentDisplay);
  }
}

const showStudy = () => {
  console.log(study);
  studyDisplay.innerHTML = "";
  createDisplay(study, studyDisplay);
}


showRecent();
showStudy();
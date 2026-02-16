let history = JSON.parse(localStorage.getItem("history") || "[]");

const detailedDisplay = document.querySelector("#detailed-display");
const clear = document.querySelector("#clear");
const detailedForm = document.querySelector(".detailed-form");
const search = document.querySelector("#detailed-search");

async function getData(word) {
  try {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    if (response.ok) {
      const data = await response.json();
      history.push(data);
      localStorage.setItem("history", JSON.stringify(history));
      detailedDisplay.innerHTML = "";
      createDisplay(data, detailedDisplay);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

detailedForm.addEventListener("submit", function (e) {
  e.preventDefault();
  getData(search.value);
  search.value = "";
});
clear.addEventListener("click", function (e) {
  e.preventDefault();
  detailedDisplay.innerHTML = "";
});

const createDisplay = (def, parent) => {
  def.forEach(function (i) {
    let wordBox = document.createElement("div");
    wordBox.classList.add("word-box");
    let name = document.createElement("h3");
    name.textContent = i.word;
    let addBtn = document.createElement("button");
    addBtn.textContent = "Add to Study List";
    addBtn.classList.add("add-btn");
    let phonetic = document.createElement("h4");
    phonetic.textContent = `Phonetics: `;
    let phoneticCont = document.createElement("p");
    phoneticCont.textContent = i.phonetic
    wordBox.append(name, addBtn, phonetic, phoneticCont);

    i.meanings.forEach(function (j) {
      let speech = document.createElement("h4");
      speech.textContent = `Part of Speech: `;
      let speechCont = document.createElement("p");
      speechCont.textContent = j.partOfSpeech;
      wordBox.append(speech, speechCont);
      j.definitions.forEach(function (k) {
        let definition = document.createElement("h4");
        definition.textContent = `Definition: `;
        let definitionCont = document.createElement("p");
        definitionCont.textContent = k.definition
        wordBox.append(definition, definitionCont);
        let syn = document.createElement("h4");
        syn.textContent = "Synonyms:"
        let synonym = document.createElement("p");
        let synString = ""
        wordBox.appendChild(syn);
        if (k.synonyms.length > 0) {
          k.synonyms.forEach(function (l, index, array) {
            if (index === array.length - 1) {
              synString += `${l}`;
            } else {
              synString += `${l}, `;
            }
          })
        } else {
          synString = "There are no listed synonyms."
        }
        synonym.textContent = synString;
        wordBox.appendChild(synonym);

        let ant = document.createElement("h4");
        ant.textContent = "Antonyms:"
        let antonym = document.createElement("p");
        let antString = ""
        wordBox.appendChild(ant);
        if (k.antonyms.length > 0) {
          k.antonyms.forEach(function (l, index, array) {
            if (index === array.length - 1) {
              antString += `${l}`;
            } else {
              antString += `${l}, `;
            }
          })
        } else {
          antString = "There are no listed antonyms."
        }
        antonym.textContent = antString;
        wordBox.appendChild(antonym);
        let example = document.createElement("h4");
        example.textContent = "Example:";
        let exampleUse = document.createElement("p");
        exampleUse.textContent = k.example;
        if (exampleUse.textContent === "") {
          exampleUse.textContent = "There are no examples given";
        }
        
        wordBox.appendChild(example);
        wordBox.appendChild(exampleUse);
        let divider = document.createElement("hr");
        wordBox.appendChild(divider);

      })
      
    })
    parent.appendChild(wordBox);
    addBtn.addEventListener("click", function (e) {
      let studyObj = i;
      let study = JSON.parse(localStorage.getItem("study") || "[]");
      study.push(studyObj);
      localStorage.setItem("study", JSON.stringify(study));
      console.log(study);
    })
  })
}
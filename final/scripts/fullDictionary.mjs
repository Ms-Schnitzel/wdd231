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
      console.log("Api result: ", data);
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
    wordBox.appendChild(name);
    let phonetic = document.createElement("h4");
    phonetic.textContent = `Phonetics: ${i.phonetic}`;
    wordBox.appendChild(phonetic);
    i.meanings.forEach(function (j) {
      console.log(j.partOfSpeech);
      let speech = document.createElement("h4");
      speech.textContent = `Part of Speech: ${j.partOfSpeech}`;
      wordBox.appendChild(speech);
      j.definitions.forEach(function (k) {
        let definition = document.createElement("p");
        definition.textContent = `Definition: ${k.definition}`;
        wordBox.appendChild(definition);
      })
      let syn = document.createElement("h4");
      syn.textContent = "Synonyms:"
      let synonym = document.createElement("p");
      let synString = ""
      wordBox.appendChild(syn);
      if (j.synonyms.length > 0) {
        j.synonyms.forEach(function (l, index, array) {
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
      if (j.antonyms.length > 0) {
        j.antonyms.forEach(function (l, index, array) {
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


      
      let divider = document.createElement("hr");
      wordBox.appendChild(divider);
    })
    parent.appendChild(wordBox);
  })
}




// getData("hello");
console.log("History initial load: ", history);
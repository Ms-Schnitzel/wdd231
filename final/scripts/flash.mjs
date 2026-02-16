let study = JSON.parse(localStorage.getItem("study") || "[]");

const modal = document.querySelector("dialog");
const closeModal = document.querySelector("#close-modal");
const flashName = document.querySelector("#flash-name");
const studyBtn = document.querySelector("#study");
const flashBtn = document.querySelector("#add-flash");
const flashDisplay = document.querySelector("#flashcard");
const clearStudy = document.querySelector("#clear-study");


studyBtn.addEventListener("click", () => {
  modal.showModal();
  flashDisplay.innerHTML = "";
})
closeModal.addEventListener("click", () => {
  modal.close();
})
flashBtn.addEventListener("click", (e) => {
  e.preventDefault();
  createFullCard();
})
clearStudy.addEventListener("click", (e) => {
  localStorage.setItem("study", "[]");
  console.log(study);
  flashName.innerHTML = "";
})

const displayNames = (arr) => {
  arr.forEach(function (i) {
    let studyBox = document.createElement("div");
    let name = document.createElement("h3");
    console.log(i.word);
    name.textContent = i.word;
    studyBox.append(name);

    flashName.append(studyBox);
  })
}

const createFullCard = () => {
  let meanVal = document.querySelector("input[name=meanings]:checked").value;
  modal.close();
  if (meanVal === "single-meaning") {
    study.forEach(function (i) {
      createSingleWord(i, 0)
    })
  } else if (meanVal === "all-meaning") {
    study.forEach(function (i) {
      for (let k = 0; k < i.meanings.length; k++) {
        console.log(k);
        createSingleWord(i, k);
      }
    })
  }
}

const createSingleWord = (item, rep) => {
  let defVal = document.querySelector("input[name=definitions]:checked").value;
  if (defVal === "single-def") {
    let wordBox = document.createElement("div");
    wordBox.classList.add("word-box");
    let name = document.createElement("h3");
    name.textContent = item.word;
    let revealBtn = document.createElement("button");
    revealBtn.textContent = "Reveal Answers";
    revealBtn.classList.add("add-btn");
    revealBtn.addEventListener("click", (e) => {
      let parent = e.target.parentNode;
      let children = parent.children;
      for (let i = 0; i < children.length; i++) {
        children[i].classList.remove("hidden");
        children[i].classList.add("show");
      }
    })
    wordBox.append(name, revealBtn);
    if (document.querySelector("input[name=speech]").checked === true) {
      createFlashItem("Part of Speech: ", item.meanings[rep].partOfSpeech, wordBox);
    }
    if (document.querySelector("input[name=phonetic]").checked === true) {
      createFlashItem("Phonetics: ", item.phonetic, wordBox);
    }
    createFlashItem("Definition: ", item.meanings[rep].definitions[0].definition, wordBox);
    if (document.querySelector("input[name=example]").checked === true) {
      createFlashItem("Example: ", item.meanings[rep].definitions[0].example, wordBox);
    }
    flashDisplay.append(wordBox);
  } else if (defVal === "all-def") {
    let wordBox = document.createElement("div");
    wordBox.classList.add("word-box");
    let name = document.createElement("h3");
    name.textContent = item.word;
    let revealBtn = document.createElement("button");
    revealBtn.textContent = "Reveal Answers";
    revealBtn.classList.add("add-btn");
    revealBtn.addEventListener("click", (e) => {
      let parent = e.target.parentNode;
      let children = parent.children;
      for (let i = 0; i < children.length; i++) {
        children[i].classList.remove("hidden");
        children[i].classList.add("show");
      }
    })
    wordBox.append(name, revealBtn);
    if (document.querySelector("input[name=speech]").checked === true) {
      createFlashItem("Part of Speech: ", item.meanings[rep].partOfSpeech, wordBox);
    }
    if (document.querySelector("input[name=phonetic]").checked === true) {
      createFlashItem("Phonetics: ", item.phonetic, wordBox);
    }
    item.meanings[rep].definitions.forEach(function (j) {
      createFlashItem("Definition: ", j.definition, wordBox);
      
      if (document.querySelector("input[name=example]").checked === true) {
        createFlashItem("Example: ", j.example, wordBox);
      }
    })
    flashDisplay.append(wordBox);
  }
}

const createFlashItem = (title, value, parent) => {
  let titleItem = document.createElement("h4");
  titleItem.textContent = title;
  let valueItem = document.createElement("p");
  valueItem.textContent = value;
  if (valueItem.textContent === "") {
    valueItem.textContent = "There are no examples given";
  }
  valueItem.classList.add("hidden");
  parent.append(titleItem, valueItem);
}

console.log(study);
displayNames(study);
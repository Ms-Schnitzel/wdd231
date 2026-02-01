const timestamp = document.querySelector("#timestamp");
const nonProfModal = document.querySelector("#non-prof-modal");
const nonProfBtn = document.querySelector("#non-prof-btn");
const closeNonProf = document.querySelector("#close-non-prof");
const bronzeModal = document.querySelector("#bronze-modal");
const bronzeBtn = document.querySelector("#bronze-btn");
const closeBronze = document.querySelector("#close-bronze");
const silverModal = document.querySelector("#silver-modal");
const silverBtn = document.querySelector("#silver-btn");
const closeSilver = document.querySelector("#close-silver");
const goldModal = document.querySelector("#gold-modal");
const goldBtn = document.querySelector("#gold-btn");
const closeGold = document.querySelector("#close-gold");

timestamp.value = `${today}`;

nonProfBtn.addEventListener("click", () => {
  nonProfModal.showModal();
});
closeNonProf.addEventListener("click", () => {
  nonProfModal.close();
});

bronzeBtn.addEventListener("click", () => {
  bronzeModal.showModal();
});
closeBronze.addEventListener("click", () => {
  bronzeModal.close();
});

silverBtn.addEventListener("click", () => {
  silverModal.showModal();
});
closeSilver.addEventListener("click", () => {
  silverModal.close();
});

goldBtn.addEventListener("click", () => {
  goldModal.showModal();
});
closeGold.addEventListener("click", () => {
  goldModal.close();
});
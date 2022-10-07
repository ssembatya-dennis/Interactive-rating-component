// This page is meant to handle the functionality of the Rating Component.

const cardRateState = document.getElementById("state-rate");
const cardThanksState = document.getElementById("state-thanks");
const btnSubmit = document.getElementById("btn-submit");
const btns = document.querySelectorAll(".card__ratings_rate");
const rate = document.getElementById("rate");

const handleSubmit = () => {
  cardRateState.classList.add("hidden");
  cardThanksState.classList.remove("hidden");
};

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    rate.innerHTML = btn.innerHTML;
  });
});

var counterDecrements = document.getElementsByClassName("counter__decrement")

for (button of counterDecrements) {
  button.addEventListener('click', decrement);
};

var counterIncrements = document.getElementsByClassName("counter__increment")

for (button of counterIncrements) {
  button.addEventListener('click', increment);
};

var dropdownButtons = document.getElementsByClassName("dropdown__button")
for (button of dropdownButtons) {
  button.addEventListener('click', showContent);
};

function decrement(e) {
  if (e.target.nextElementSibling.value != 0) {
    e.target.nextElementSibling.value--;
    if (e.target.nextElementSibling.value <= 0)
      e.target.setAttribute('disabled','');
  }
};

function increment(e) {
  e.target.previousElementSibling.value++;
  e.target.previousElementSibling.previousElementSibling.removeAttribute('disabled');
};

function showContent(e) {
  e.target.classList.toggle('expanded');
  e.target.nextElementSibling.classList.toggle('show');
};
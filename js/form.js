const form = document.querySelector(".form-of-name"),
  input = form.querySelector("input"),
  greetingText = document.querySelector(".greeting-text");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";
const CHANGE_CN = "change-location";

function greeting(text) {
  form.classList.remove(SHOWING_CN);
  greetingText.classList.add(SHOWING_CN);
  greetingText.classList.add(CHANGE_CN);

  greetingText.innerText = `hello ${text}`;
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  greeting(currentValue);
}

function nameBox() {
  form.addEventListener("submit", handleSubmit);
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    nameBox();
  } else {
  }
}

function init() {
  loadName();
}

init();

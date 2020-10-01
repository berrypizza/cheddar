const toDo = document.querySelector(".js-to-do"),
  toDoInput = toDo.querySelector("input"),
  toDoList = document.querySelector(".js-to-do-lsit");

const TODO_LS = "toDos";

function paintList(text) {
  const toDoLi = document.createElement("li");
  const span = document.createElement("span");
  const delBtn = document.createElement("button");
  delBtn.value = "X";
  span.innerText = text;
  toDoList.appendChild(toDoLi);
  toDoLi.appendChild(span);
  toDoLi.appendChild(delBtn);
}

function handleSubmitToDo(event) {
  event.preventDefault();
  toDoValue = toDoInput.value;
  paintList(toDoValue);
  toDoInput.value = "";
}

function loadToDo() {
  const toDos = localStorage.getItem(TODO_LS);
  if (toDos !== null) {
  }
}

function init() {
  loadToDo();
  toDo.addEventListener("submit", handleSubmitToDo);
}

init();

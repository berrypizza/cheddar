const text = document.querySelector(".clock-time");

const MOVE_CN = "moving";

$("clockBox").one("click", function (event) {});

function bigger() {
  document.getElementById("boxbox").style.height = "90%";
  text.classList.add(MOVE_CN);
  form.classList.add(SHOWING_CN);
}

function biggerFirst() {
  bigger();
}

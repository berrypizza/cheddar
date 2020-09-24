const text = document.querySelector(".clock-time");

const MOVE_CN = "moving";

function bigger() {
  document.getElementById("boxbox").style.height = "90%";
  text.classList.add(MOVE_CN);
}

const clockBox = document.querySelector(".clock-box"),
  clockTime = clockBox.querySelector(".clock-time");

function clocking() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  clockTime.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  clocking();
  setInterval(clocking, 1000);
}

init();

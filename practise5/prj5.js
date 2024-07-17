let h2 = document.querySelector("h2");
let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
var int;
start.addEventListener("click", function () {
  let count = 0;
  int = setInterval(function () {
    h2.textContent = count;
    count++;
  }, 300);
});
stop.addEventListener("click", function () {
  clearInterval(int);
});

let downloadbox = document.querySelector("#downloadbox");
let progress = document.querySelector("#progress");
let h2 = document.querySelector("h2");
let button = document.querySelector("button");
button.addEventListener("click", function () {
  button.textContent = "Downloading..";
  let count = 0;
  let int = setInterval(function () {
    if (count === 100) {
      h2.style.opacity = 1;
      button.textContent = "Downloaded";
      clearInterval(int);
    }
    progress.style.width = count + "%";
    count++;
  }, 80);
});

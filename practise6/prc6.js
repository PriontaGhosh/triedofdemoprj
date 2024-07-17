// let home = document.querySelector("#home");
// let about = document.querySelector("#about");
// let content = document.querySelector("#content");
let divs = document.querySelectorAll(".tab");
let texts = document.querySelectorAll("h3");

// let hometext = document.querySelector("#hometext");
// let abouttext = document.querySelector("#abouttext");
// let contenttext = document.querySelector("#contenttext");

texts[0].style.display = "block";

function removeallCode() {
  texts.forEach(function (text) {
    text.style.display = "none";
  });
}
divs.forEach(function (div, index) {
  div.addEventListener("click", function () {
    removeallCode();
    texts[index].style.display = "block";
  });
});
// home.addEventListener("click", function () {
//   removeallCode();
//   hometext.style.display = "block";
// });
// about.addEventListener("click", function () {
//   removeallCode();
//   abouttext.style.display = "block";
// });
// content.addEventListener("click", function () {
//   removeallCode();
//   contenttext.style.display = "block";
// });

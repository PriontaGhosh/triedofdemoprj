let textarea = document.querySelector("textarea");
let span = document.querySelector("span");

textarea.addEventListener("input", function () {
  if (textarea.value.length > 100) {
    span.style.color = "red";
    span.textContent = 100 - textarea.value.length;
  } else {
    span.textContent = textarea.value.length;
    span.style.color = "black";
  }
});

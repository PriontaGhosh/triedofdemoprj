let inpts = document.querySelectorAll("input[type='text']");
let form = document.querySelector("#myform");
let h3 = document.querySelector("h3");

form.addEventListener("submit", function (eve) {
  eve.preventDefault();
  for (var i = 0; i < inpts.length; i++) {
    if (inpts[i].value.trim() === "") {
      h3.textContent = "Error!!!";
      h3.style.color = "red";
      break;
    } else {
      h3.textContent = "";
    }
  }
});

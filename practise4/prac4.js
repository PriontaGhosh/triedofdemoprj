let inp = document.querySelector("#inp");
let add = document.querySelector("#add");
let remove = document.querySelector("#remove");

let ul = document.querySelector("ul");
let li;
add.addEventListener("click", function () {
  li = document.createElement("li");
  li.textContent = inp.value;
  ul.appendChild(li);
  inp.value = "";
});
remove.addEventListener("click", function () {
  ul.removeChild(li);
});

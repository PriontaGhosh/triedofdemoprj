let people = document.querySelector(".people");
let input = document.querySelector("input");
let data = [
  {
    name: "Dinesh",
    src: "https://images.unsplash.com/photo-1720194390390-207767cb0ef9?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Digonta",
    src: "https://images.unsplash.com/photo-1720194038292-f1ba6e797e4f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Dipesh",
    src: "https://images.unsplash.com/photo-1720194038292-f1ba6e797e4f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Resmika",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Rashed",
    src: "https://images.unsplash.com/photo-1474176857210-7287d38d27c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Rasedul",
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Prity",
    src: "https://images.unsplash.com/photo-1673279495269-bc0d925c0612?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Pinky",
    src: "https://images.unsplash.com/photo-1676385901160-31e1b9e1c0c7?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Hemansi",
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Harshika",
    src: "https://images.unsplash.com/photo-1589525231707-f2de2428f59c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

var pres = "";
data.forEach(function (ele) {
  pres += `<div class="person">
            <div class="img">
              <img
                src="${ele.src}"
                alt=""
              />
            </div>
            <h4>${ele.name}</h4>
          </div>`;
});

people.innerHTML = pres;
let matching;
input.addEventListener("input", function () {
  matching = data.filter(function (e) {
    return e.name.startsWith(input.value);
  });
  let filteredusers = "";
  matching.forEach(function (ele) {
    filteredusers += `<div class="person">
              <div class="img">
                <img
                  src="${ele.src}"
                  alt=""
                />
              </div>
              <h4>${ele.name}</h4>
            </div>`;
  });

  people.innerHTML = filteredusers;
});

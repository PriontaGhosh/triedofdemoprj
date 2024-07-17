function data(url) {
  const parchi = new Promise((resolve, reject) => {
    fetch(url)
      .then((raw) => raw.json())
      .then((result) => {
        resolve(result);
      });
  });
  return parchi;
}
data("https://randomuser.me/api/").then(function (result) {
  console.log(result.results[0]);
});
// So here
// 1) syntax of writing Promise
// 2) how to return the peomise

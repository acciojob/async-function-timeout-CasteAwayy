const form = document.querySelector("form");
const output = document.querySelector("#output");

form.addEventListener("submit", handleSubmit);

const promise = function (time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("ok");
    }, time);
  });
};

async function handleSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const waitOver = await promise(formData.get("delay"));
  let html = `<p>${formData.get("text")}</p>`;
  output.insertAdjacentHTML("afterbegin", html);
}

let btn = document.querySelector(".btn");
let textText = document.querySelector(".text");
let btn__reset = document.querySelector(".btn__reset");

let text = 0;

btn.addEventListener("click", function () {
  text = text + 1;
  textText.innerText = text;
});

btn__reset.addEventListener("click", function () {
  text = 0;
  textText.innerText = text;
});

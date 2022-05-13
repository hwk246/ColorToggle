const body = document.querySelector("body");
const color = document.querySelector("#color-menu");
const getal = document.querySelector(".colorByNumber input");

changeBackgroundColor = (value) => {
  body.classList.remove(body.classList[0]);
  body.classList.add(value);
  document.querySelector(".pickedColor").innerHTML = "backgroundcolor " + value;
  color.classList.remove("show");
  Array.from(document.getElementsByClassName(value))[2].checked = true;
};

Array.from(document.getElementsByTagName("li")).forEach((element) => {
  element.addEventListener("click", (e) =>
    changeBackgroundColor(element.getAttribute("value"))
  );
});

document
  .querySelector("header div:first-child div:first-child")
  .addEventListener("mouseenter", () => color.classList.add("show"));

getal.addEventListener("keydown", (e) => {
  if (e.keyCode === 49) {
    body.classList.remove(body.classList[0]), changeBackgroundColor("home");
  } else if (e.keyCode === 50) {
    body.classList.remove(body.classList[0]), changeBackgroundColor("red");
  } else if (e.keyCode === 51) {
    body.classList.remove(body.classList[0]), changeBackgroundColor("orange");
  } else if (e.keyCode === 52) {
    body.classList.remove(body.classList[0]), changeBackgroundColor("purple");
  } else if (e.keyCode === 53) {
    body.classList.remove(body.classList[0]), changeBackgroundColor("green");
  }
});

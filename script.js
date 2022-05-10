// -----> Functions

home = function () {
  body.classList.toggle("home");
  body.classList.remove("green");
  body.classList.remove("red");
  body.classList.remove("orange");
  body.classList.remove("purple");
  liveColor.innerHTML = "background 'HOME'";
  colorNumber.value = "";
  radioCheck1.checked = true;
};

red = function () {
  body.classList.toggle("red");
  body.classList.remove("green");
  body.classList.remove("orange");
  body.classList.remove("purple");
  body.classList.remove("home");
  liveColor.innerHTML = "background 'RED'";
  colorNumber.value = "";
  radioCheck2.checked = true;
};

orange = function () {
  body.classList.toggle("orange");
  body.classList.remove("green");
  body.classList.remove("purple");
  body.classList.remove("red");
  body.classList.remove("home");
  liveColor.innerHTML = "background 'ORANGE'";
  colorNumber.value = "";
  radioCheck3.checked = true;
};

purple = function () {
  body.classList.toggle("purple");
  body.classList.remove("green");
  body.classList.remove("red");
  body.classList.remove("orange");
  body.classList.remove("home");
  liveColor.innerHTML = "background 'PURPLE'";
  colorNumber.value = "";
  radioCheck4.checked = true;
};

green = function () {
  body.classList.toggle("green");
  body.classList.remove("red");
  body.classList.remove("orange");
  body.classList.remove("home");
  body.classList.remove("purple");
  liveColor.innerHTML = "background 'GREEN'";
  colorNumber.value = "";
  radioCheck5.checked = true;
};

numberChanger = function (number) {
  if (number.keyCode === 49) {
    home();
  } else if (number.keyCode === 50) {
    red();
  } else if (number.keyCode === 51) {
    orange();
  } else if (number.keyCode === 52) {
    purple();
  } else if (number.keyCode === 53) {
    green();
  }
};

addClassShow = function () {
  color.classList.add("show");
};

removeClassShow = function () {
  color.classList.remove("show");
};

// -----> Individual variables

const body = document.querySelector("body");
const liveColor = document.querySelector(".pickedColor");
const radioCheck1 = document.querySelector(".home input");
const radioCheck2 = document.querySelector(".red input");
const radioCheck3 = document.querySelector(".orange input");
const radioCheck4 = document.querySelector(".purple input");
const radioCheck5 = document.querySelector(".green input");

// -----> Eventlisteners

// visibility of color picker menu
const spans = document.querySelector("header div:first-child div:first-child");
spans.addEventListener("mouseenter", addClassShow);

const color = document.querySelector("#color-menu");
color.addEventListener("mouseleave", removeClassShow);

// changing of background-color and resetting (class) values
const homeBtn = document.querySelector("#color-menu li:nth-child(1)");
homeBtn.addEventListener("click", home);

const redBtn = document.querySelector("#color-menu li:nth-child(2)");
redBtn.addEventListener("click", red);

const orangeBtn = document.querySelector("#color-menu li:nth-child(3)");
orangeBtn.addEventListener("click", orange);

const purlpleBtn = document.querySelector("#color-menu li:nth-child(4)");
purlpleBtn.addEventListener("click", purple);

const greenBtn = document.querySelector("#color-menu li:nth-child(5)");
greenBtn.addEventListener("click", green);

// changes bacground by reading input from keyboard
const colorNumber = document.querySelector(".colorByNumber input");
colorNumber.addEventListener("keyup", numberChanger);

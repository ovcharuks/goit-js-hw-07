function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const btn = document.querySelector(".change-color");
const spanColor = document.querySelector(".color")

btn.addEventListener("click", inputColor);

function inputColor (event) {
 body.style.backgroundColor = getRandomHexColor();
 //spanColor.textContent += ` ${getRandomHexColor()}`
 spanColor.textContent = `- ${getRandomHexColor()}`
}

console.log();
inputColor();



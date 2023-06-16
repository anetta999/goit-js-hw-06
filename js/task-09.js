function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
console.log(getRandomHexColor());

// Напиши скрипт, який змінює кольори фону елемента < body > через інлайн - стиль
// по кліку на button.change - color
// і виводить значення кольору в span.color.

const button = document.querySelector(".change-color");
const colorName = document.querySelector(".color");

button.addEventListener("click", handlerClick);

function handlerClick() {
  document.body.style.backgroundColor = getRandomHexColor();
  colorName.textContent = getRandomHexColor();
}

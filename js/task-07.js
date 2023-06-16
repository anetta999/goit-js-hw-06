// Напиши скрипт, який реагує на зміну значення input#font - size - control(подія input)
// і змінює інлайн - стиль span#text, оновлюючи властивість font - size.
// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

input.addEventListener("input", handlerInputRange);

const value = input.value;

function handlerInputRange() {
  span.style.fontSize = `${value}px`;

  console.log(value);
  console.log(span.style.fontSize);
}

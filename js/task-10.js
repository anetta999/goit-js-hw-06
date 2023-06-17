// Створи функцію createBoxes(amount), яка приймає один параметр - число.
// Функція створює стільки < div >,
// скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.
// Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes,
// у такий спосіб видаляючи всі створені елементи.

const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
console.log(createBtn);
console.log(destroyBtn);
const input = document.querySelector("#controls input");
console.log(input);
const boxes = document.querySelector("#boxes");

createBtn.addEventListener("click", handlerCreateBtnClick);

function handlerCreateBtnClick() {
  const amount = Number(input.value);

  createBoxes(amount);
}

function createBoxes(amount) {
  const newBoxes = [];
  let step = 0;

  for (let i = 0; i <= amount; i += 1) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("box");
    newDiv.style.backgroundColor = getRandomHexColor();

    newDiv.style.width = `${step}px`;
    newDiv.style.height = `${step}px`;
    step += 10;

    newBoxes.push(newDiv);
  }
  boxes.append(...newBoxes);
}

destroyBtn.addEventListener("click", handlerDestroyBtnClick);

function handlerDestroyBtnClick() {
  destroyBoxes();
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

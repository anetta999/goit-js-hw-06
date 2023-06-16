function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

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
const input = createBtn.previousElementSibling;
console.log(input);
const boxes = document.querySelector("#boxes");

function createBoxes(amount) {
  amount = Number(input.value);

  createBtn.addEventListener("click", () => {
    const newDiv = document.createElement("div");
    newDiv.classList.add("box");
    newDiv.style.backgroundColor = getRandomHexColor();

    let step = 0;
    step += 10;
    newDiv.style.width = `${step}`;
    newDiv.style.height = `${step}`;
    boxes.append(newDiv);
  });
}

function destroyBoxes() {
  destroyBtn.addEventListener("click", () => {
    boxes.innerHTML = "";
  });
}

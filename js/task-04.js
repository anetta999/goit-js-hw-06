// Створи змінну counterValue, в якій буде зберігатися поточне значення
// лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй
// або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const selectors = {
  decrementBtn: document.querySelector('button[data-action="decrement"]'),
  incrementBtn: document.querySelector('button[data-action="increment"]'),
  counter: document.querySelector("#value"),
};

selectors.decrementBtn.addEventListener("click", handlerdecrementBtnClick);
selectors.incrementBtn.addEventListener("click", handlerincrementBtnClick);

let counterValue = 0;

function handlerdecrementBtnClick() {
  counterValue -= 1;
  selectors.counter.textContent = `${counterValue}`;
}

function handlerincrementBtnClick() {
  counterValue += 1;
  selectors.counter.textContent = `${counterValue}`;
}

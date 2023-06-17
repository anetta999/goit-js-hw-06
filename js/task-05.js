// Напиши скрипт, який під час набору тексту в інпуті input#name -
// input(подія input),
// підставляє його поточне значення в span#name - output.
// Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const selectors = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};

selectors.input.addEventListener("input", handlerInput);

function handlerInput(event) {
  selectors.output.textContent = event.target.value.trim();

  if (!event.target.value.trim()) {
    selectors.output.textContent = "Anonymous";
  }
}

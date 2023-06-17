// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.

// Яка кількість символів повинна бути в інпуті,
// зазначається в його атрибуті data - length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим,
// якщо неправильна кількість - червоним.

const input = document.querySelector("#validation-input");

input.addEventListener("blur", handlerInputBlur);

function handlerInputBlur() {
  const dataLength = input.getAttribute("data-length");
  console.log(dataLength);

  const currentLength = input.value.length;
  console.log(currentLength);

  input.classList.add("invalid");

  if (Number(dataLength) === Number(currentLength)) {
    input.classList.replace("invalid", "valid");
  }
}

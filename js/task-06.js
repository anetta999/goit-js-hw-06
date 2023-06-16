// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.

// Яка кількість символів повинна бути в інпуті,
// зазначається в його атрибуті data - length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим,
// якщо неправильна кількість - червоним.

const input = document.querySelector("#validation-input");

input.addEventListener("blur", handlerInputBlur);

function handlerInputBlur(event) {
  const dataLength = event.currentTarget.getAttribute("data-length");
  console.log(dataLength);

  const currentLength = event.currentTarget.value.length;
  console.log(currentLength);

  if (
    Number(dataLength) === Number(currentLength) &&
    !event.currentTarget.classList.contains("invalid")
  ) {
    event.currentTarget.classList.add("valid");
  } else if (
    Number(dataLength) === Number(currentLength) &&
    event.currentTarget.classList.contains("invalid")
  ) {
    event.currentTarget.classList.replace("invalid", "valid");
  } else {
    event.currentTarget.classList.add("invalid");
  }
}

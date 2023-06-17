// Обробка відправлення форми form.login - form повинна
// відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те,
// що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт,
// де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості.
// Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми
// методом reset.

const form = document.querySelector(".login-form");
console.dir(form);

form.addEventListener("submit", handlerFormSubmit);

function handlerFormSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  if (!email.value || !password.value) {
    return alert("Please fill in all fields!");
  }
  // const formData = new FormData(event.currentTarget);

  // const data = {};

  // formData.forEach((value, key) => (data[key] = value));
  // console.log(data);

  // const keys = Object.keys(event.currentTarget.elements);
  // console.log(keys);

  // const data = keys.reduce((acc, item) => {
  //   if (isNaN(item)) {
  //     acc[item] = event.currentTarget.elements[item].value;
  //   }
  //   return acc;
  // }, {});
  // console.log(data);

  const data = {
    email: email.value,
    password: password.value,
  };
  console.log(data);

  event.currentTarget.reset();
}

// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories,
// тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories,
// знайде і виведе в консоль текст заголовку елемента (тегу <h2>)
// і кількість елементів в категорії (усіх <li>, вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach()
// і властивості навігації по DOM.

const list = document.querySelectorAll(".item"); // повертає перший елемент документа, який відповідає вказаному селектору
console.log(list);

console.log(`Number of categories: ${list.length}`); // властивість, яка повертає HTML-колекцію(псевдомасив) усіх дітей елемента(включає тільки вузли-елементи, тобто теги), на якому була викликана

list.forEach((li) => {
  console.log(`Category: ${li.firstElementChild.textContent}`);
  console.log(`Elements: ${li.lastElementChild.children.length}`);
});
console.log(list.children);

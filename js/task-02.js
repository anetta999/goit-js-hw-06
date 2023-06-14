const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredientsList = document.querySelector("#ingredients");
console.log(ingredientsList);

const ingredientsMarkup = ingredients.map((ingredient) => {
  const li = document.createElement("li"); // сторює елемент ('TagName') і повертає посилання на нього як результат свого виконання
  li.textContent = ingredient;
  li.classList.add("item");

  return li;
});

console.log(ingredientsMarkup);

ingredientsList.append(...ingredientsMarkup); // додає один або декілька елементів після всіх дітей елемента

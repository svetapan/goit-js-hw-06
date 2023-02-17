const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const holderEl = document.querySelector('#ingredients')

const makeLiElements = (ingredients) => {
  return ingredients.map(ingredient => {
  const listEl = document.createElement("li");
  listEl.textContent = ingredient;
  return listEl;
});
}

const elements = makeLiElements(ingredients)
holderEl.append(...elements);

console.log(holderEl);

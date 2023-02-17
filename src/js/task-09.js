const bodyEl = document.querySelector('body');
const btnEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');

btnEl.addEventListener('click', onchangeColorBtnClick);

function onchangeColorBtnClick() {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`
  spanEl.textContent = randomColor;
  bodyEl.style.background = randomColor;
}
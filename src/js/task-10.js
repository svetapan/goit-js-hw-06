const inputEl = document.querySelector('input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const divEl = document.querySelector('#boxes');

btnCreate.addEventListener('click', event => {
  event.preventDefault();
  divEl.innerHTML = '';
  const divs = createBoxes(Number(inputEl.value));

  divEl.append(...divs);
});

btnDestroy.addEventListener('click', event => {
  event.preventDefault();
  inputEl.value = '';
  divEl.innerHTML = '';
});

function createBoxes(amount) {
  const array = Array.from( {length: amount}, (item, i) => {
      const element = document.createElement('div');
      const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      element.style.background = randomColor;
      element.style.width = i * 10 + 30 + 'px';
      element.style.height = i * 10 + 30 + 'px';

      return element;
    } 
  );
  
  console.log(array);

  return array;
}
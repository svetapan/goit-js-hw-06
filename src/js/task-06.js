const inputEl = document.querySelector('#validation-input');
const dataLength = inputEl.getAttribute('data-length');
const validInput = 'valid';
const inValidInput = 'invalid';

inputEl.addEventListener('blur', onBlurBorderColor);

function onBlurBorderColor(event) {
    inputEl.classList.remove(validInput);
    inputEl.classList.remove(inValidInput);

    inputEl.value.length == dataLength ?
    inputEl.classList.add(validInput) : inputEl.classList.add(inValidInput);
}
    
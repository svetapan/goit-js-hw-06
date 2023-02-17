const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');
// console.log(inputEl);
// console.log(spanEl);

function onInputName(event) {
    spanEl.textContent = inputEl.value !== "" ?
    event.currentTarget.value : "Anonymous";
};

inputEl.addEventListener('input', onInputName);
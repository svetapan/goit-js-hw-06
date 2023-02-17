const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

function onchangeStyleSpanEl(inputEl){
    spanEl.style.fontSize = inputEl.currentTarget.value + 'px';
}

inputEl.addEventListener('input', onchangeStyleSpanEl);

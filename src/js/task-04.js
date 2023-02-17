const counterValue = {
    value: 0,
    decrement() {
        this.value -= 1;
    },
    increment() {
        this.value += 1;
    }
};

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value')

function onClickBtnDecrement () {
    // console.log('Кликнули нa декремент');
    counterValue.decrement();
    // console.log(counterValue);
    valueEl.textContent = counterValue.value;
}

function onClickBtnIncrement () {
    // console.log('Кликнули нa инкремент'); 
    counterValue.increment();
    // console.log(counterValue);
    valueEl.textContent = counterValue.value;
}

decrementBtn.addEventListener('click', onClickBtnDecrement);

incrementBtn.addEventListener('click', onClickBtnIncrement);
const formEl = document.querySelector('.login-form');
let obj = {};

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    formData.forEach((value, name) => {
        obj[name] = value;
    })

    if (Object.values(obj).includes('')) {
        alert('Всі поля повинні бути заповнені!');
    } else {
        console.log(obj);
    }

    formEl.reset();
}

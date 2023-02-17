const listEl = document.querySelectorAll('.item');
console.log("Number of categories:", listEl.length);

listEl.forEach(el => {
    const titleEl = el.querySelector('h2').textContent;
    console.log("Category:", titleEl);
    const listItemsEl  = el.querySelectorAll('li').length;
    console.log("Elements:", listItemsEl);
});



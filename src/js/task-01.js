const listEl = document.querySelectorAll('.item');
console.log(listEl);

console.log("Number of categories:", listEl.length);

listEl.forEach(element => {
    const titleEl = element.firstElementChild.textContent;
    console.log("Category:", titleEl);

    const listItemEl = element.lastElementChild.children.length;
    console.log("Elements:", listItemEl);
});

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const holderEl = document.querySelector(".gallery");
// console.log(holderEl);

const makeImages = (images) => {
  return images.map(image => {
    const listEl = document.createElement("li");
    listEl.classList.add('gallery_li')
  
    const imgEl = document.createElement("img");
    imgEl.classList.add('gallery_img');
    imgEl.src = image.url;
    imgEl.alt = image.alt;
    listEl.appendChild(imgEl);
    return listEl;
  })
}

const holder = makeImages(images);
holderEl.append(...holder);

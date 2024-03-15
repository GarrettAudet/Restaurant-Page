import Chef from './Chef.png';

function loadMenu() {
  const content = document.getElementById('content');
  content.innerHTML = ''; // Clear existing content

  const title = document.createElement('p');
  title.innerText = 'Your Local Pizzeria';

  const slogan = document.createElement('p');
  slogan.innerText = 'Made With Passion Since 1904';

  const image = document.createElement('img');
  image.id = 'imageContainer';
  image.src = Chef; // Use imported image
  image.alt = 'Chef';

  const orderOnline = document.createElement('p');
  orderOnline.innerText = 'Order Online!';

  content.appendChild(title);
  content.appendChild(slogan);
  content.appendChild(image);
  content.appendChild(orderOnline);
}

export default loadMenu;


// <p>Your Local Pizzeria</p>
// <p>Made With Passion Since 1904</p>
// <img id = "imageContainer" alt = "Chef">
// <p>Order Online!</p>
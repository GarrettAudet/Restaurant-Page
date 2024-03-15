import pepe from './Images/pepe.png';
import disgustoso from './Images/disgustoso.png';
import gamberi from './Images/gamberi.png';
import salsiccia from './Images/salsiccia.png';

function loadDynamicMenu() {
    const content = document.getElementById('content');
    content.innerHTML = '';
  
    const menu = document.createElement('div');
    menu.className = 'menu';
  
    const menuItems = [
      { src: salsiccia, title: 'Salsiccia', description: 'Tomato sauce, Mozarella, Tomato, Sausage, Garlic, Basil' },
      { src: gamberi, title: 'Gamberi', description: 'Tomato sauce, Mozarella, Shrimp, Feta, Olives' },
      { src: pepe, title: 'Pepe', description: 'Tomato sauce, Mozarella, Chilli Flakes, Olives, Basil' },
      { src: disgustoso, title: 'Disgustoso', description: 'Tomato sauce, Bacon, Pineapple, Olives, Basil' },
    ];
  
    menuItems.forEach(item => {
      const menuItem = document.createElement('div');
      menuItem.className = 'menu-item';
  
      const img = document.createElement('img');
      if (item.src) {
        img.src = item.src; 
      }
      menuItem.appendChild(img);
  
      const title = document.createElement('h2');
      title.innerText = item.title;
      menuItem.appendChild(title);
  
      const description = document.createElement('p');
      description.innerText = item.description;
      menuItem.appendChild(description);
  
      menu.appendChild(menuItem);
    });
  
    content.appendChild(menu);
  }
  
  export default loadDynamicMenu;
  
import './styles.css';
import loadHome from './home.js';
import loadMenu from './menu.js';
import Chef from './Chef.png';

// Get all buttons with the class 'menu-button'
const buttons = document.querySelectorAll('.header-group');

// Iterate over the NodeList of buttons to add the click event listener to each button
buttons.forEach(button => {

  button.addEventListener('click', function() {
    // Remove the 'selected' class from all buttons
    buttons.forEach(btn => btn.classList.remove('selected'));
    
    // Add the 'selected' class to the clicked button
    this.classList.add('selected');

    // Determine which content to load based on the button clicked
    if (this.textContent === 'Menu') {
      loadMenu();
    } else if (this.textContent === 'Home') {
      loadHome();
    } 
  });
});

document.getElementById('imageContainer').src = Chef;

console.log("Test Webpack!");
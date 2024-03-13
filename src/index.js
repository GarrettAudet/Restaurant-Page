import './styles.css';

// Get all buttons with the class 'menu-button'
const buttons = document.querySelectorAll('.header-group');

// Iterate over the NodeList of buttons to add the click event listener to each button
buttons.forEach(button => {
    
  button.addEventListener('click', function() {
    // Remove the 'selected' class from all buttons
    buttons.forEach(btn => btn.classList.remove('selected'));
    
    // Add the 'selected' class to the clicked button
    this.classList.add('selected');
  });
});

console.log("Test Webpack!");
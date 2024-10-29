// create a variable to store HEX character combination
let hexCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

// select span and button element using their ID values
const spanValue = document.getElementById('value');
const clickButton = document.getElementById('btn');

// create an event listener to button
clickButton.addEventListener('click', function() {
  getRandomCharacter();
});

// function to generate HEX value characters
function getRandomCharacter() {
  let hexColorCharacters = '#';
  for(let i = 0; i < 6; i++) {
    hexColorCharacters += hexCharacters[generateRandomNumber()];
  }

  spanValue.textContent = hexColorCharacters;
  document.body.style.backgroundColor = hexColorCharacters;
}

function generateRandomNumber(){
  return Math.floor(Math.random() * hexCharacters.length);
}
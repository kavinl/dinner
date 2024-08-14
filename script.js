const priceSelect = document.getElementById('price');
const typeRadio = document.getElementsByName('type');
const suggestButton = document.getElementById('suggest');
const resultDiv = document.getElementById('result');

const restaurantTypes = [
  "Italian",
  "Mexican",
  "Chinese",
  "Japanese",
  "Indian",
  "Thai",
  "American",
  "Fast Food",
  "Pizza",
  "Burger"
];

suggestButton.addEventListener('click', () => {
  // Get user input
  const price = priceSelect.value;
  let type = '';
  for (const radio of typeRadio) {
    if (radio.checked) {
      type = radio.value;
      break;
    }
  }

  // Generate random suggestion
  const randomIndex = Math.floor(Math.random() * restaurantTypes.length);
  const suggestion = restaurantTypes[randomIndex];

  // Display the suggestion
  resultDiv.textContent = `How about ${suggestion}?`;
});

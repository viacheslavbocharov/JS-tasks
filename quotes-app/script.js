const quotes = [
  'The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela',
  'The way to get started is to quit talking and begin doing. - Walt Disney',
  "Don't let yesterday take up too much of today. - Will Rogers",
];

const quoteElement = document.getElementById('quote');
const generateBtn = document.getElementById('generate-btn');

function generateRandomQoute() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quoteElement.textContent = randomQuote;
}

generateBtn.addEventListener('click', generateRandomQoute);

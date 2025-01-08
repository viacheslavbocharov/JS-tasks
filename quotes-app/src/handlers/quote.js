import quotes from '../data/quotes.js';
import { generateRandomInt } from '../utils.js';
import { handleFavorite } from './favorites.js';

let currentQuote = null;

function handleQuote() {
  const randomQuote = choseRandomQuote(quotes);
  currentQuote = randomQuote;
  displayQuote(randomQuote);
}

function displayQuote(quote) {
  const { text, author, isFavorite } = quote;
  const quoteAuthorElement = document.getElementById('quote-author');
  const quoteElement = document.getElementById('quote');
  quoteElement.textContent = text;
  quoteAuthorElement.textContent = author;
  handleFavorite(isFavorite);
}

function choseRandomQuote(quotes) {
  const randomIndex = generateRandomInt(quotes.length);
  return quotes[randomIndex];
}

export { handleQuote, currentQuote };

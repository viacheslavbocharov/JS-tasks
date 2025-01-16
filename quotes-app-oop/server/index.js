const express = require('express');
const quotes = require('./data/quotes');
const app = express();
const PORT = 3000;

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

app.get('/api/quotes/random-single', (req, res) => {
  const randomQuote = getRandomQuote();
  res.json(randomQuote);
});

app.get('/', (req, res) => {
  res.send('Server res');
});

app.listen(PORT, () => {
  console.log(`Quote API service is running on port ${PORT}`);
});

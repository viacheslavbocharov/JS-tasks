const express = require('express');
const cors = require('cors');
const quotes = require('./data/quotes');
const PORT = 3000;

const app = express();

const corsOptions = {
  origin: '*',
  //origin: ['http://localhost:5500', 'http://127.0.0.1:5500'],
};
app.use(cors(corsOptions));

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

//midlware
// app.use((req, res, next) => {
//   console.log('Первое middleware');
//   next();
// });

// // Второе middleware
// app.use((req, res, next) => {
//   console.log('Второе middleware');
//   next();
// });

app.get('/api/quotes/random-single', (req, res) => {
  const randomQuote = getRandomQuote();
  res.json(randomQuote);
});

app.listen(PORT, () => {
  console.log(`Quote API service is running on port ${PORT}`);
});

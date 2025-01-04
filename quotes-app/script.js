const quotes = [
  {
    quote:
      'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    author: 'Nelson Mandela',
  },
  {
    quote: 'The way to get started is to quit talking and begin doing.',
    author: 'Walt Disney',
  },
  {
    quote: "Don't let yesterday take up too much of today.",
    author: 'Will Rogers',
  },
  {
    quote:
      'Success is not final, failure is not fatal: It is the courage to continue that counts.',
    author: 'Winston Churchill',
  },
  {
    quote: 'You miss 100% of the shots you don’t take.',
    author: 'Wayne Gretzky',
  },
  {
    quote: 'Whether you think you can or you think you can’t, you’re right.',
    author: 'Henry Ford',
  },
  {
    quote: 'I have not failed. I’ve just found 10,000 ways that won’t work.',
    author: 'Thomas Edison',
  },
  {
    quote:
      'It is our choices, that show what we truly are, far more than our abilities.',
    author: 'J.K. Rowling',
  },
  {
    quote: 'Life is what happens when you’re busy making other plans.',
    author: 'John Lennon',
  },
  {
    quote: 'The purpose of our lives is to be happy.',
    author: 'Dalai Lama',
  },
];

const quoteElement = document.getElementById('quote');
const quoteAuthorElement = document.getElementById('quote-author');
const generateBtn = document.getElementById('generate-btn');

function generateRandomQoute() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  const {quote, author} = randomQuote
  quoteElement.textContent = quote;
  quoteAuthorElement.textContent = author;
}

generateBtn.addEventListener('click', generateRandomQoute);

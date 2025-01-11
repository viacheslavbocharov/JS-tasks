import quotes from '../data/quotes.js';
import MathUtils from '../utils/MathUtils.js';
import Quote from './Quote.js';

class RandomQuote {
  static getRandomQuote() {
    const randomIndex = MathUtils.generateRandomInt(quotes.length);
    const { id, text, author } = quotes[randomIndex];
    const randomQuote = new Quote(id, text, author);
    //localStorage.setItem('currentQuote', JSON.stringify(randomQuote));
    return randomQuote;
  }
}

export default RandomQuote;

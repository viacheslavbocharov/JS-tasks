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

  static getRandomQuoteViaAPI() {
    const url = 'https://quoteslate.vercel.app/api/quotes/random';
    const options = { headers: { 'Content-Type': 'application/json' } };

    return fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        const { id, quote: text, author } = data;
        return new Quote(id, text, author);
      })
      .catch((error) => console.error(error));
  }

  // static async getRandomQuoteViaAPI() {
  //   try {
  //     const response = await fetch(
  //       'https://quoteslate.vercel.app/api/quotes/random'
  //     );
  //     const data = await response.json();
  //     const { id, quote: text, author } = data;
  //     const randomQuote = new Quote(id, text, author);
  //     console.log(randomQuote);
  //     return randomQuote;
  //   } catch (error) {
  //     console.error('Error fetching random quote:', error);
  //     return null;
  //   }
  // }
}

export default RandomQuote;

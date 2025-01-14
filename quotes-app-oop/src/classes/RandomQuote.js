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
  //Each async function returns Promise
  //Promice возвращаемый фнкцией будет всегда fulfilled потому что отлавливаем все возможные ошибки
  //результат fulfilled promise будет Quote or undefined
  //Terefore no need try/catch block where we call this function
  static async getRandomQuoteViaAPI() {
    const url = 'https://quoteslate.vercel.app/api/quotes/random';
    const options = { headers: { 'Content-Type': 'application/json' } };
    try {
      const res = await fetch(url, options);
      const data = await res.json();
      const { id, quote: text, author } = data;
      //resolves promise to Quote
      return new Quote(id, text, author);
    } catch (error) {
      console.error(error);
      // catch возвращаеет неявно undefinde(resolves promise to undefined)
    }
  }
}

export default RandomQuote;

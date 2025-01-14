import RandomQuote from './RandomQuote.js';
import Quote from './Quote.js';

class RandomQuotesApp {
  constructor() {
    this.randomQuoteBtn = document.getElementById('random-quote-btn');
    this.randomQuoteApiBtn = document.getElementById('random-quote-api-btn');
    this.quoteTextElement = document.getElementById('quote-text');
    this.quoteAuthorElement = document.getElementById('quote-author');
    this.currentQuote = null;
    this.init();
  }

  displayCurrentQuote() {
    this.quoteTextElement.textContent = this.currentQuote.formatText();
    this.quoteAuthorElement.textContent = this.currentQuote.formatAuthor();
  }

  changeCurrentQuote(newQuote) {
    if (newQuote instanceof Quote) {
      this.currentQuote = newQuote;
      this.displayCurrentQuote();
    }
  }

  getRandomQuote() {
    this.changeCurrentQuote(RandomQuote.getRandomQuote());
  }

  getRandomQuoteViaAPI() {
    RandomQuote.getRandomQuoteViaAPI().then((quote) =>
      this.changeCurrentQuote(quote)
    );
  }

  init() {
    this.randomQuoteBtn.addEventListener('click', () => this.getRandomQuote());
    this.randomQuoteApiBtn.addEventListener('click', () =>
      this.getRandomQuoteViaAPI()
    );
  }
}

export default RandomQuotesApp;

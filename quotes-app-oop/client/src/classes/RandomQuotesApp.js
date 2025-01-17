import RandomQuote from './RandomQuote.js';
import Quote from './Quote.js';

class RandomQuotesApp {
  constructor() {
    this.randomQuoteBtn = document.getElementById('random-quote-btn');
    this.randomQuotePublicApiBtn = document.getElementById(
      'random-quote-public-api-btn'
    );
    this.randomQuoteOwnApiBtn = document.getElementById(
      'random-quote-own-api-btn'
    );
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

  randomQuoteHandler() {
    this.changeCurrentQuote(RandomQuote.getRandomQuote());
  }

  // getRandomQuoteViaAPI() {
  //   RandomQuote.getRandomQuoteViaAPI().then((quote) =>
  //     this.changeCurrentQuote(quote)
  //   );
  // }

  // async handleRandomQuoteViaPublicAPI() {
  //   this.changeCurrentQuote(await RandomQuote.getRandomQuoteViaPublicAPI());
  // }

  // async handleRandomQuoteViaOwnAPI() {
  //   this.changeCurrentQuote(await RandomQuote.getRandomQuoteViaOwnAPI());
  // }

  async handleRandomQuoteViaAPI(apiIsOwn = false) {
    this.changeCurrentQuote(
      apiIsOwn
        ? await RandomQuote.getRandomQuoteViaOwnAPI()
        : await RandomQuote.getRandomQuoteViaPublicAPI()
    );
  }

  init() {
    this.randomQuoteBtn.addEventListener('click', () =>
      this.randomQuoteHandler()
    );
    this.randomQuotePublicApiBtn.addEventListener('click', () =>
      this.handleRandomQuoteViaAPI()
    );
    this.randomQuoteOwnApiBtn.addEventListener('click', () =>
      this.handleRandomQuoteViaAPI(true)
    );
  }
}

export default RandomQuotesApp;

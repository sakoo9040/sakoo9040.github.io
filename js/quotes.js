const quotes = [
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
  {
    quote:
      "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.",
    author: "William W. Purkey",
  },
  {
    quote:
      "Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend.",
    author: "Albert Camus",
  },
  {
    quote: "If you tell the truth, you don't have to remember anything.",
    author: "Mark Twain",
  },
  {
    quote:
      "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    author: "Mahatma Gandhi",
  },
  {
    quote: "Without music, life would be a mistake.",
    author: "Friedrich Nietzsche, Twilight of the Idols",
  },
  {
    quote: "That which does not kill us makes us stronger.",
    author: "Friedrich Nietzsche",
  },
  {
    quote: "It is never too late to be what you might have been.",
    author: "George Eliot",
  },
  {
    quote: "If you judge people, you have no time to love them.",
    author: "Mother Teresa",
  },
  {
    quote:
      "If you can't explain it to a six year old, you don't understand it yourself.",
    author: "Albert Einstein",
  },
];
const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = `-${todaysQuote.author}-`;

import { useState } from 'react'
import quotes from "./assets/quotes.json";
import { FaTwitter, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { FaTumblr } from "react-icons/fa";
import './App.css'

interface Quote {
  quote: string;
  author: string;
}

const getRandomQuote = (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

const getRandomColor = (): string => {
 const colors = [
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#f86964",
  "#342224",
  "#472e32",
  "#808899",
  "#7781a9",
  "#773a857",
 ]

 return colors[Math.floor(Math.random() * colors.length)];
}

const transition = "all is";

function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote());
  const [randomColor, setRandomColor] = useState<string>(getRandomColor());

  const changeQuote = () => {
    setQuote(getRandomQuote());
    setRandomColor(getRandomColor());
  }

  return (
  <div className="background" style={{ backgroundColor: randomColor, transition }}>
    <div id="quote-box">
      <div className="quote-content" style={{ color: randomColor }}>
        
        <h2 id="text">
        <FaQuoteLeft size="30" style={{ marginRight: "10px" }} />
          {quote.quote}
          <FaQuoteRight size="30" style={{ marginLeft: "10px" }} />
          </h2>
        <h4 id="author">- {quote.author}</h4>
      </div>
      <div className="buttons">

        <a href={"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.quote}"}
        id="tweet-quote"
        style={{
          backgroundColor: randomColor,
          marginRight: "10px",
          display: "inline-flex"
        }}
        >
          <FaTwitter color="white" />
        </a>

        <a href={"https://www.tumblr.com/login?redirect_to=https%3A%2F%2Fwww.tumblr.com%2Fwidgets%2Fshare%2Ftool%3Fposttype%3Dquote%26tags%3Dquotes%252Cfreecodecamp%26caption%3DDalai%2BLama%26content%3DHappiness%2Bis%2Bnot%2Bsomething%2Breadymade.%2B%2BIt%2Bcomes%2Bfrom%2Byour%2Bown%2Bactions.%26canonicalUrl%3Dhttps%253A%252F%252Fwww.tumblr.com%252Fbuttons%26shareSource%3Dtumblr_share_button"}
        id="tumblr-quote"
        style={{ backgroundColor: randomColor, marginRight: "10px",
         display: "inline-flex" }} >
        <FaTumblr color="white" />
        </a>

        <button id="new-quote" onClick={changeQuote}
         style={{ backgroundColor: randomColor,
        marginLeft: "300px", marginBottom: "10px",
      display: "inline-flex" }}>New Quote</button>
      </div>
    </div>
  </div>
  );
}

export default App

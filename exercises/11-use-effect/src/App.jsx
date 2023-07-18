// Import useEffect here
import { useState, useEffect } from "react";
import "./App.css";
import ronSwansonImage from "./assests/ronswanson.png";
// import Axios (or use Fetch)
import axios from "axios";

function App() {
  /**
   * Set up your state
   */
  const [quote, setQuote] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState("");

  /**
   * Make an AJAX call with the useEffect hook
   */
  useEffect(() => {
    setIsLoading(true);
    axios(ronSwansonImage)
      .then((response) => {
        setQuote(response);
      })
      .catch(() => {
        setHasError(true);
      })
      .then(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <body class="bg-warning text-center">
      <img src={ronSwansonImage} alt="" width="450" height="423" class="mt-4" />
      <div class="container">
        {/* Display a loading message */}
        {isLoading && <p className="text-primary">Loading ...</p>}
        {/* Display an error message if the API fails */}
        {hasError && (
        <div className="alert alert-danger" role="alert">
          We're sorry, but an unexpected error occurred
        </div>
        )}
        <blockquote
          id="quote"
          class="blockquote bg-dark text-white border-0 mb-4"
        >
          {/* Complete me */}
          {quote.map((user) => {
        const key = `quote-${quote}`;
        const name = `${quote}`;
        return (
          <div key={key}>
            <img src={quote} alt={name} />
            <p>{name}</p>
          </div>
        );
      })}
        </blockquote>
      </div>
    </body>
  );
}

export default App;

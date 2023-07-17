// Import what you need from React here
import { useContext } from "react";
// You will need to import the "TranslatorContext" and "TranslatorProvider" from src/contexts/TranslatorContext.js
import { TranslatorContext, TranslatorProvider } from "./src/contexts/TranslatorContext.js";

import "./App.css";
import NavBar from "../NavBar/NavBar";
import CreateAccount from "../CreateAccount/CreateAccount";
import Footer from "../Footer/Footer";

function App() {
  /**
   * Handle the Provider here
   */
  const [language, setLanguage] = useContext(TranslatorContext);

  return (
    <TranslatorContext.Consumer value={[language, setLanguage]}>
    <div className="App d-flex flex-column">
      <NavBar />
      <div className="container pt-4 pb-4">   
      <CreateAccount />
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
    </TranslatorContext.Consumer>
  );
}

export default App;

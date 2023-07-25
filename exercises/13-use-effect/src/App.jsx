// import useEffect
import { useState, useEffect } from "react";
import "./App.css";
// import Axios (or use Fetch)
import axios from "axios";

function App() {
  /**
   * Set up state and make AJAX requests here
   */
  const [char, setChar] = useState([]);

  const [charImage, setCharImage] = useState("");
 
  const [charName, setCharName] = useState("");

  const fetchChar = async () => {
  const response = await axios.get(`https://rickandmortyapi.com/api/character/`);
      setChar(response.data.results);
}

useEffect(() => {
  fetchChar();
}, []);

const fetchSingleChar = async (id) => {
  const response = await axios(`https://rickandmortyapi.com/api/character/${id}`);
  setCharImage(response.data.image);
  setCharName(response.data.name);
};


  return (
    <div className="container">
      <div className="row text-center" id="body">
        <h1 id="title-head">{charName}</h1>
        <div id="main-img">
          <a href="http://rickandmorty.wikia.com/wiki/Rick_Sanchez">
            {/* Add an alt and src to this image */}
            <img height="250" alt={charName} src={charImage}/>
          </a>
          <div className="linkfooter">
            <p>Select your favorite character</p>
            {/* Handle event here */}
            <select id="dropdown" type="text"
              onChange={(e) => fetchSingleChar(e.target.value)}
            >
              <option></option>
              {char.map((character) => (
                <option value={character.id} key={character.id}>
                  {character.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

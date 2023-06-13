import "./App.css";
import { phones } from "./images/phones";
// import something here
import { technologies } from "./images/technologies";

function App() {
  return (
    <div className="App">
      {technologies.map((image, index) => (
        <img src={image} key={`technology-${index}`} alt={"Tech"} />
      ))}
      {Object.values(phones).map((image, index) => (
        <img src={image} key={`phone-${index}`} alt={"Phone"} />
      ))}
    </div>
  );
}

export default App;

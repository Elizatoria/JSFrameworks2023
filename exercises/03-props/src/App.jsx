import "./App.css";
// import something here
import Welcome from "./Components/Welcome";
import Heading from "./Components/Heading";

function App() {
  return (
    <div className="App">
      <Welcome name="Victoria" />
      <Welcome />
      <Heading>Welcome to my React App!</Heading>
    </div>
  );}

export default App;

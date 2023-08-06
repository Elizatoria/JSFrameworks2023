import "./App.css";
// import something here
import Welcome from "./Components/Welcome";
import Heading from "./Components/HeadingC";

function App() {
  return (
    <div className="App">
      <Heading>Welcome to my React App!</Heading>
      <Welcome name="Victoria" />
      <Welcome />
    </div>
  );}

export default App;
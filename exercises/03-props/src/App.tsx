import "./App.css";
// import something here
import Welcome from "./Components/Heading/welcome/Welcomew"
import Heading from "./Components/HeadingC";

function App() {
  return (
    <>
      <Welcome name="Victoria" />
      <Welcome />
      <Heading>Welcome to my React App!</Heading>
    </>
  );}

export default App;

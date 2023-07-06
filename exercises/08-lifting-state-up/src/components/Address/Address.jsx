import { useState } from "react";

import AddressForm from "../AddressForm/AddressForm";
import AddressResults from "../AddressResults/AddressResults";

function App() {
  const [displayResults, setDisplayResults] = useState(false);

  const [didSignUp, setDidSignUp] = useState(false);

  const [values, setValues] = useState({});
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  /**
   * You will need to call on useState here for form fields
   * e.g. first name, last name, etc.
   */

  /**
   * You will need to pass props to <AddressResults /> and <AddressForm />
   */
  return <>{displayResults ? <AddressResults values={values} /> : <AddressForm values={values} setValues={setValues} didSignUp={didSignUp} setDidSignUp={setDidSignUp} displayResults={displayResults} setDisplayResults={setDisplayResults} handleChange={handleChange} />}</>;
}

export default App;

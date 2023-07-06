/**
 * After the user submit the form, this displays what the user entered.
 * @param {Object} props which should somehow include:
 * - first name
 * - last name
 * - address
 * - city
 * - state
 * - zipcode / postal code
 * - country
 */
function AddressResults(props) {
  return (
    <div className="card card-body bg-light mt-4 mb-4">
      Results:
      <ul className="list-unstyled mb-0">
      {Object.values(props.values).map((value, index) => {
              return <li key={`value-${index}`}>{value}</li>;
            })}
      </ul>
      <p>
            {props.didSignUp
              ? "Thank you for signing up for our newsletter!"
              : "Please sign up for our newsletter!"}
          </p>
    </div>
  );
}

export default AddressResults;

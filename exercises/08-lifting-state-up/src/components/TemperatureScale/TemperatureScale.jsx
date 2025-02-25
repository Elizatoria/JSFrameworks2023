import PropTypes from "prop-types";

function TemperatureScale(props) {
  return <div
    className="btn-group"
    role="group"
    aria-label="Convert temperature"
  >
    <button
      className="btn btn-outline-primary"
      onClick={() => props.setScale("F")}
    >
      Fahrenheit
    </button>
    <button
      className="btn btn-outline-primary"
      onClick={() => props.setScale("C")}
    >
      Celsius
    </button>
  </div>;
}

TemperatureScale.propTypes = {
  setScale: PropTypes.func.isRequired,
};

export default TemperatureScale;

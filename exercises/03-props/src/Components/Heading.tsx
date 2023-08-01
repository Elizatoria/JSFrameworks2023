import React from "react";

const Heading:React.FC<HeadingProps> = ({ children }) => {
  return <h1>{children}</h1>;
};

export default Heading;
// Create a component called `<Heading />`. This component should render any children props to the screen.

// Import and your render you `<Welcome />` component in `<App />` like this:

// ```jsx
// <Heading>Welcome to my React App!</Heading>
// ```

// ### Acceptance Criteria

// - I should create a component called `<Heading />` that renders children props to the screen.
// - The `<App />` component should use the `<Heading />` component to render the text "Welcome to my React App!" to the screen.
import React from "react";

interface HeadingProps  {
  children:React.ReactNode 
  }
  
export default HeadingProps;
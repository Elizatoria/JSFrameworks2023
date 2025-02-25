/**
 * You will be setting up your routes in this file.
 *
 * You can use ./src/components/App/App.jsx as an example here:
 * @see https://codesandbox.io/s/react-router-v6-with-typescript-rftmjh?file=/src/components/App/App.tsx
 *
 * You can also use this as a resource:
 * @see https://reactrouter.com/
 *
 * First, you will need to import the packages you need from React Router.
 * Then, import some things from React Router.
 */
import { Routes, Route } from "react-router-dom";

import Home from "../Home/Home";
import Category from "../Category/Category";

function App() {
  /**
   * Next, you will need to setup your routes here.
   * YOU SHOULD ONLY USE <Route> TWICE.
   *
   * - "/" should map to "Home"
   * - "/category/food" should map to "Category"
   * - "/category/clothing" should map to "Category"
   * - "/category/office" should map to "Category"
   */
  return (
    <>
      <div className="bg-success text-white pt-1 pb-1 mb-3">
        <h1 className="container h2">NoName E-Commerce</h1>
      </div>
      <main className="container mb-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:category" element={<Category />} />
        </Routes>
        </main>
    </>
  );
}

export default App;

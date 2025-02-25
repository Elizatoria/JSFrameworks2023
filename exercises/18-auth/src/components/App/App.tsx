import { useState, ChangeEvent, FormEvent } from "react";
// import something here
import Home from "../Home/Home";
// import Axios (or use Fetch)
import  axios  from "axios";

function App() {
  /**
   * User input
   */
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  /**
   * Handling AJAX loading and errors
   */
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  /**
   * Complete all the logging in and logout logic
   */
  const [token, setToken] = useState("");

  /**
   * If the user is logged in, you should render the <Home /> component instead.
   */

  interface LoginResponse {
    message: string;
    token?: string;
    expiry?: number;
  }

  const login = async () => {
    setIsLoading(true);

    try {
      const response = await axios<LoginResponse>(
        "http://localhost:7001/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            username,
            password,
          },
        }
      );

      if (!response.data.token) {
        throw new Error("Missing access token in login response");
      }

      setToken(response.data.token);
      setUsername("");
    } catch (error) {
      console.error(error);

      if (axios.isAxiosError(error) && error.response?.status === 401) {
        setErrorMessage("Invalid username or password");
      } else setErrorMessage("Login Fail");
    }

    setPassword("");
    setIsLoading(false);
  };


  const logout = () => {
    setToken("");
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    login();
  };

  if (token) {
    return <Home token={token} logout={logout} />;
  } else {

  return (
    <div className="container mt-2 mb-5">
      <h1>Login</h1>
      {/* Handle form submission */}
      <form className="form-inline mb-2" method="POST" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username" className="mr-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="form-control mr-3"
            required={true}
            value={username}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setUsername(e.target.value)
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="mr-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="form-control mr-3"
            required={true}
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={isLoading}>
          Login
        </button>
      </form>
      <p className="form-text">
        <small>
          The username is <em>username</em> and the password is{" "}
          <em>password</em>
        </small>
      </p>
      {isLoading && <p>Loading ...</p>}
      {errorMessage && (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      )}
    </div>
  );
}}

export default App;

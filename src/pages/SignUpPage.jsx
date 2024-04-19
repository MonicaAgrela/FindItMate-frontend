import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "/src/index.css"

function SignupPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);
  const handleUserName = (e) => setUserName(e.target.value);

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    let newUser = {
      email: email,
      password: password,
      name: name,
      username: username,
    };

    axios
      .post(`${import.meta.env.VITE_API_URL}/auth/signup`, newUser)
      .then((createdUser) => {
        navigate("/login");
        console.log(createdUser);
      })
      .catch((err) => {
        console.log(err.response.data.message);
        setErrorMessage(err.response.data.message);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="p-8 bg-white bg-opacity-90 shadow-md sm:rounded-lg mx-auto max-w-md w-full space-y-8">
        <div>
          <h2 className="text-3xl font-extrabold text-center text-gray-800">
            Sign up for an account
          </h2>
        </div>
        <form onSubmit={handleSignupSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="input-field"
              placeholder="Name"
              value={name}
              onChange={handleName}
            />
          </div>
          <div>
            <label htmlFor="username" className="sr-only">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              required
              className="input-field"
              placeholder="Username"
              value={username}
              onChange={handleUserName}
            />
          </div>
          <div>
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="input-field"
              placeholder="Email address"
              value={email}
              onChange={handleEmail}
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="input-field"
              placeholder="Password"
              value={password}
              onChange={handlePassword}
            />
          </div>
          <div>
            <button
              type="submit"
              className="btn-primary w-full py-3 px-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-md text-white font-semibold transition duration-300 ease-in-out transform hover:scale-105"
            >
              Sign up
            </button>
          </div>
        </form>
        <div className="text-center">
          <p className="text-sm text-gray-700">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Log in
            </Link>
          </p>
        </div>
        {errorMessage && (
          <p className="mt-2 text-center text-sm text-red-600">
            {errorMessage}
          </p>
        )}
      </div>
    </div>
  );
}

export default SignupPage;

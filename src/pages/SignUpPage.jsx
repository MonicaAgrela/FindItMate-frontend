import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function SignupPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
 
  const navigate = useNavigate();

  
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    let newUser = {
      email: email,
      password: password,
      name: name,
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-semibold text-center mb-6">Sign Up</h1>

        <form onSubmit={handleSignupSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">Name:</label>
            <input
              required
              type="text"
              name="name"
              value={name}
              onChange={handleName}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1">Email:</label>
            <input
              required
              type="email"
              name="email"
              value={email}
              onChange={handleEmail}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1">Password:</label>
            <input
              required
              minLength={6}
              type="password"
              name="password"
              value={password}
              onChange={handlePassword}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Sign Up
          </button>
        </form>

        {errorMessage && (
          <p className="text-red-500 text-center mt-4">{errorMessage}</p>
        )}

        <p className="mt-4 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;

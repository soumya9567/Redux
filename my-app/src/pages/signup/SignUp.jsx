import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/reducers/authSlice";

function SignUp() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState([]);
  const handleChange = (e) => {
    console.log(formData, "on handle change");
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData));
  };

  return (
    <div>
      <div className="bg-gray-100 flex justify-center items-center h-screen">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
          <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
            Sign Up
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                User name
              </label>
              <input
                type="text"
                id="name"
                name="username"
                onChange={handleChange}
                placeholder="Enter your user name"
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div className="mt-8">
              <button
                type="submit"
                className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Sign In
              </button>
            </div>

            <div className="text-center mt-4">
              <span className="text-sm text-blue-500 hover:underline">
                Forgot your password?
              </span>
            </div>

            <div className="text-center mt-4">
              <Link to={"/"}>
                {" "}
                <p className="text-sm text-gray-600">
                  Don't have an account?{" "}
                  <span className="text-blue-500 hover:underline">Sign in</span>
                </p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

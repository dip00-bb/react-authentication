import React from "react";
import { Link } from "react-router";

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-gray-800/70 rounded-2xl p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-white text-center mb-6">Register</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-300 mb-1">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 rounded bg-gray-700/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 rounded bg-gray-700/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Photo URL</label>
            <input
              type="url"
              placeholder="Photo URL"
              className="w-full p-2 rounded bg-gray-700/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 rounded bg-gray-700/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              pattern="(?=.*[a-z])(?=.*[A-Z]).{6,}"
              title="Password must be at least 6 characters and include at least one uppercase and one lowercase letter."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Register
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-gray-300">
            Already have an account?{' '}
            <Link to="/auth/login" className="text-blue-400 hover:underline">
              Login here
            </Link>
          </p>
        </div>

        <div className="mt-6 text-center">
          <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
}

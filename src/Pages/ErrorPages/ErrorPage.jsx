import React from 'react';
import { Link } from 'react-router';
import useTitle from '../../Component/Title/useTitle';

const ErrorPage = () => {
    useTitle("Error")
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white px-4">
      <div className="text-center">
        <h1 className="text-7xl font-bold mb-4 text-red-500">404</h1>
        <h2 className="text-3xl font-semibold mb-2">Oops! Page Not Found</h2>
        <p className="mb-6 text-gray-300">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 text-lg font-medium text-white bg-red-600 hover:bg-red-700 rounded-xl transition duration-300"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  // State to hold form data
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple form validation
    if (!email || !password) {
      setMessage('Please fill in both email and password.');
      return;
    }

    // Reset the message and handle login logic (e.g., make API request)
    setMessage('');
    console.log('Logging in with:', { email, password });
    
    // Example: Proceed with login API request or logic here...
    // For now, just resetting fields to simulate success
    setEmail('');
    setPassword('');
  };

  return (
    <section className="h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full border shadow-lg bg-white p-8 rounded-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Login</h2>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email Address"
              className="w-full bg-gray-100 p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Your Password"
              className="w-full bg-gray-100 p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          {message && <p className="text-red-500 text-sm text-center">{message}</p>}
          <div>
            <button
              type="submit"
              className="w-full mt-4 bg-indigo-600 text-white hover:bg-indigo-500 font-medium py-3 rounded-md transition duration-300 ease-in-out"
            >
              Login
            </button>
          </div>
        </form>
        <p className="my-5 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/register" className="text-indigo-600 hover:underline">
            Register here
          </Link>
          .
        </p>
      </div>
    </section>
  );
};

export default Login;

import { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Logging in with:', { email, password });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl shadow-lg bg-white">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 text-gray-800 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block text-gray-600">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 text-gray-800 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="block w-full p-3 text-center text-white bg-indigo-600 rounded-md">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;


  
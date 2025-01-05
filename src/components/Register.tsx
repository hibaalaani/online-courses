import React, { useState } from 'react';
import axios from 'axios';

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleRegister = async () => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL_USER_BASE_URL}/register/`, {
        username,
        email,
        password,
      });
      alert('Registration successful! Please login.');
    } catch (err) {
      setError('Failed to register. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
      <input
        type="text"
        placeholder="Username"
        className="w-full p-3 mb-4 border rounded"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full p-3 mb-4 border rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full p-3 mb-4 border rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleRegister}
        className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
      >
        Register
      </button>
      {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
    </div>
  );
};

export default Register;

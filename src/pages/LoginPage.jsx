import { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/login', { email, password });
      localStorage.setItem('token', res.data.token);
      navigate('/todos');
    } catch (err) {
      alert('Login gagal');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"
          className="w-full p-2 border rounded mb-4" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"
          className="w-full p-2 border rounded mb-4" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">Login</button>
      </form>
    </div>
  );
}

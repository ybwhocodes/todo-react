import { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function RegisterPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '', password_confirmation: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await api.post('/register', form);
      navigate('/');
    } catch (err) {
      alert('Registrasi gagal');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleRegister} className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-xl font-bold mb-4">Register</h2>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Name"
          className="w-full p-2 border rounded mb-4" />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email"
          className="w-full p-2 border rounded mb-4" />
        <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Password"
          className="w-full p-2 border rounded mb-4" />
        <input name="password_confirmation" type="password" value={form.password_confirmation} onChange={handleChange} placeholder="Confirm Password"
          className="w-full p-2 border rounded mb-4" />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded w-full">Register</button>
      </form>
    </div>
  );
}

import { useEffect, useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

export default function TodoPage() {
  const [todos, setTodos] = useState([]);
  const [editing, setEditing] = useState(null);
  const navigate = useNavigate();

  const fetchTodos = async () => {
    const res = await api.get('/todos');
    setTodos(res.data);
  };

  const handleCreate = async (todo) => {
    if (editing) {
      await api.patch(`/todos/${editing.id}`, todo);
      setEditing(null);
    } else {
      await api.post('/todos', todo);
    }
    fetchTodos();
  };

  const handleEdit = (todo) => {
    setEditing(todo);
  };

  const handleDelete = async (id) => {
    await api.delete(`/todos/${id}`);
    fetchTodos();
  };

  const handleLogout = async () => {
    await api.post('/logout');
    localStorage.removeItem('token');
    navigate('/');
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <TodoForm onAdd={handleCreate} initialData={editing} />
      <button onClick={handleLogout} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">Logout</button>
      <TodoList todos={todos} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
}

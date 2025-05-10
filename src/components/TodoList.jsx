export default function TodoList({ todos, onDelete, onEdit }) {
  return (
    <ul className="space-y-2 mt-4">
      {todos.map((todo) => (
        <li key={todo.id} className="p-4 bg-gray-100 rounded shadow">
          <div className="flex justify-between items-center">
            <div>
              <strong className="block text-lg">{todo.title}</strong>
              <span className="text-gray-700">{todo.description}</span>
            </div>
            <div className="space-x-2">
              <button onClick={() => onEdit(todo)} className="bg-yellow-400 px-3 py-1 rounded text-white">Edit</button>
              <button onClick={() => onDelete(todo.id)} className="bg-red-600 px-3 py-1 rounded text-white">Delete</button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

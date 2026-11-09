import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TodoForm from '../components/TodoForm';

function TodoDetail(props) {
  const params = useParams();
  const navigate = useNavigate();
  const id = params.id;
  const [todo, setTodo] = useState(null);
  const [editing, setEditing] = useState(false);

  useEffect(function() {
    async function load() {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos/' + id);
      const data = await res.json();
      setTodo(data);
    }
    load();
  }, [id]);

  async function updateTodo(todo) {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/' + id, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todo)
    });
    const data = await res.json();
    setTodo(data);
    setEditing(false);
  }

  async function deleteTodo() {
    await fetch('https://jsonplaceholder.typicode.com/todos/' + id, { method: 'DELETE' });
    navigate('/todos');
  }

  async function toggleTodo() {
    if (!todo) return;
    const updated = { userId: todo.userId, title: todo.title, completed: !todo.completed };
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/' + id, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updated)
    });
    const data = await res.json();
    setTodo(data);
  }

  if (!todo) return <p>Loading...</p>;

  return (
    <div>
      <h2>Todo Detail</h2>
      <p>{todo.title} - {todo.completed ? 'done' : 'todo'}</p>
      <button onClick={toggleTodo}>Toggle</button>
      <button onClick={function() { setEditing(true); }}>Edit</button>
      <button onClick={deleteTodo}>Delete</button>
      {editing && <TodoForm initial={todo} onSubmit={updateTodo} onCancel={function() { setEditing(false); }} />}
    </div>
  );
}

export default TodoDetail;
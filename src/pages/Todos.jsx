import { useState, useEffect } from 'react';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';

function Todos(props) {
  const [todos, setTodos] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(null);
  const [selected, setSelected] = useState(null);

  useEffect(function() {
    async function load() {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await res.json();
      setTodos(data);
    }
    load();
  }, []);

  async function createTodo(todo) {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todo)
    });
    const data = await res.json();
    setTodos(todos.concat(data));
    setShowForm(false);
  }

  async function updateTodo(todo) {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/' + editing.id, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todo)
    });
    const data = await res.json();
    const newList = todos.map(function(t) {
      if (t.id === data.id) return data;
      return t;
    });
    setTodos(newList);
    setEditing(null);
  }

  async function toggleTodo(t) {
    const updated = { userId: t.userId, title: t.title, completed: !t.completed };
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/' + t.id, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updated)
    });
    const data = await res.json();
    const newList = todos.map(function(x) {
      if (x.id === data.id) return data;
      return x;
    });
    setTodos(newList);
  }

  async function deleteTodo(id) {
    await fetch('https://jsonplaceholder.typicode.com/todos/' + id, { method: 'DELETE' });
    const newList = todos.filter(function(t) { return t.id !== id; });
    setTodos(newList);
  }

  async function viewTodo(id) {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/' + id);
    const data = await res.json();
    setSelected(data);
  }

  return (
    <div>
      <h2>Todos</h2>
      <button onClick={function() { setShowForm(true); setEditing(null); }}>Add Todo</button>
      {showForm && !editing && <TodoForm onSubmit={createTodo} onCancel={function() { setShowForm(false); }} />}
      {editing && <TodoForm initial={editing} onSubmit={updateTodo} onCancel={function() { setEditing(null); }} />}
      <div>
        <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
      </div>
      {selected && (
        <div>
          <p>{selected.title} - {selected.completed ? 'done' : 'todo'}</p>
          <button onClick={function() { setEditing(selected); }}>Edit</button>
        </div>
      )}
      <div>
        <input placeholder="View todo by id" onKeyDown={function(e) {
          if (e.key === 'Enter') viewTodo(e.target.value);
        }} />
      </div>
    </div>
  );
}

export default Todos;
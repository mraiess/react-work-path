import { useState, useEffect } from 'react';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';

function Todos(props) {
  const [todos, setTodos] = useState([]);
  const [showForm, setShowForm] = useState(false);

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

  return (
    <div>
      <h2>Todos</h2>
      <button onClick={function() { setShowForm(true); }}>Add Todo</button>
      {showForm && <TodoForm onSubmit={createTodo} onCancel={function() { setShowForm(false); }} />}
      <div>
        <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
      </div>
    </div>
  );
}

export default Todos;
import { useState } from 'react';
import UserList from '../components/UserList';
import UserCard from '../components/UserCard';
import UserForm from '../components/UserForm';

function Users(props) {
  const [selected, setSelected] = useState(null);
  const [posts, setPosts] = useState([]);
  const [todos, setTodos] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(null);
  const [users, setUsers] = useState([]);

  async function selectUser(u) {
    setSelected(u);
    const postsRes = await fetch('https://jsonplaceholder.typicode.com/users/' + u.id + '/posts');
    const postsData = await postsRes.json();
    setPosts(postsData);
    const todosRes = await fetch('https://jsonplaceholder.typicode.com/users/' + u.id + '/todos');
    const todosData = await todosRes.json();
    setTodos(todosData);
  }

  async function createUser(user) {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    });
    const data = await res.json();
    setUsers(users.concat(data));
    setShowForm(false);
  }

  async function updateUser(user) {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + editing.id, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    });
    const data = await res.json();
    setSelected(data);
    setEditing(null);
  }

  async function deleteUser(id) {
    await fetch('https://jsonplaceholder.typicode.com/users/' + id, { method: 'DELETE' });
    setSelected(null);
    setPosts([]);
    setTodos([]);
  }

  return (
    <div>
      <h2>Users</h2>
      <button onClick={function() { setShowForm(true); setEditing(null); }}>Add User</button>
      {showForm && !editing && <UserForm onSubmit={createUser} onCancel={function() { setShowForm(false); }} />}
      {editing && <UserForm initial={editing} onSubmit={updateUser} onCancel={function() { setEditing(null); }} />}
      <div>
        <UserList onSelect={selectUser} />
      </div>
      {selected && (
        <div>
          <UserCard user={selected} />
          <button onClick={function() { setEditing(selected); }}>Edit</button>
          <button onClick={function() { deleteUser(selected.id); }}>Delete</button>
          <h3>Posts</h3>
          <ul>{posts.map(function(p) { return <li key={p.id}>{p.title}</li>; })}</ul>
          <h3>Todos</h3>
          <ul>{todos.map(function(t) { return <li key={t.id}>{t.title} - {t.completed ? 'done' : 'todo'}</li>; })}</ul>
        </div>
      )}
    </div>
  );
}

export default Users;
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import UserCard from '../components/UserCard';
import UserForm from '../components/UserForm';

function UserDetail(props) {
  const params = useParams();
  const navigate = useNavigate();
  const id = params.id;
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [todos, setTodos] = useState([]);
  const [editing, setEditing] = useState(false);

  useEffect(function() {
    async function load() {
      const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
      const data = await res.json();
      setUser(data);
      const postsRes = await fetch('https://jsonplaceholder.typicode.com/users/' + id + '/posts');
      const postsData = await postsRes.json();
      setPosts(postsData);
      const todosRes = await fetch('https://jsonplaceholder.typicode.com/users/' + id + '/todos');
      const todosData = await todosRes.json();
      setTodos(todosData);
    }
    load();
  }, [id]);

  async function updateUser(user) {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    });
    const data = await res.json();
    setUser(data);
    setEditing(false);
  }

  async function deleteUser() {
    const ok = window.confirm('Delete this user?');
    if (!ok) return;
    await fetch('https://jsonplaceholder.typicode.com/users/' + id, { method: 'DELETE' });
    navigate('/users');
  }

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h2>User Detail</h2>
      <UserCard user={user} />
      <button onClick={function() { setEditing(true); }}>Edit</button>
      <button onClick={deleteUser}>Delete</button>
      {editing && <UserForm initial={user} onSubmit={updateUser} onCancel={function() { setEditing(false); }} />}
      <h3>Posts</h3>
      <ul>{posts.map(function(p) { return <li key={p.id}>{p.title}</li>; })}</ul>
      <h3>Todos</h3>
      <ul>{todos.map(function(t) { return <li key={t.id}>{t.title} - {t.completed ? 'done' : 'todo'}</li>; })}</ul>
    </div>
  );
}

export default UserDetail;
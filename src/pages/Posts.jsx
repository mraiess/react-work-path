import { useState } from 'react';
import PostList from '../components/PostList';
import PostCard from '../components/PostCard';
import PostForm from '../components/PostForm';

function Posts(props) {
  const [selected, setSelected] = useState(null);
  const [author, setAuthor] = useState(null);
  const [comments, setComments] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(null);
  const [posts, setPosts] = useState([]);

  async function selectPost(p) {
    setSelected(p);
    const authorRes = await fetch('https://jsonplaceholder.typicode.com/users/' + p.userId);
    const authorData = await authorRes.json();
    setAuthor(authorData);
    const commentsRes = await fetch('https://jsonplaceholder.typicode.com/posts/' + p.id + '/comments');
    const commentsData = await commentsRes.json();
    setComments(commentsData);
  }

  async function createPost(post) {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post)
    });
    const data = await res.json();
    setPosts(posts.concat(data));
    setShowForm(false);
  }

  async function updatePost(post) {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + editing.id, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post)
    });
    const data = await res.json();
    setSelected(data);
    setEditing(null);
  }

  async function deletePost(id) {
    const ok = window.confirm('Delete this post?');
    if (!ok) return;
    await fetch('https://jsonplaceholder.typicode.com/posts/' + id, { method: 'DELETE' });
    setSelected(null);
    setComments([]);
    setAuthor(null);
  }

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={function() { setShowForm(true); setEditing(null); }}>Add Post</button>
      {showForm && !editing && <PostForm onSubmit={createPost} onCancel={function() { setShowForm(false); }} />}
      {editing && <PostForm initial={editing} onSubmit={updatePost} onCancel={function() { setEditing(null); }} />}
      <div>
        <PostList onSelect={selectPost} />
      </div>
      {selected && (
        <div>
          <PostCard post={selected} />
          <p>Author: {author ? author.name : ''}</p>
          <button onClick={function() { setEditing(selected); }}>Edit</button>
          <button onClick={function() { deletePost(selected.id); }}>Delete</button>
          <h3>Comments</h3>
          <ul>{comments.map(function(c) { return <li key={c.id}>{c.email}: {c.body}</li>; })}</ul>
        </div>
      )}
    </div>
  );
}

export default Posts;
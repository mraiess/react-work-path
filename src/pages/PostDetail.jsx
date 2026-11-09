import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PostCard from '../components/PostCard';
import PostForm from '../components/PostForm';

function PostDetail(props) {
  const params = useParams();
  const navigate = useNavigate();
  const id = params.id;
  const [post, setPost] = useState(null);
  const [author, setAuthor] = useState(null);
  const [comments, setComments] = useState([]);
  const [editing, setEditing] = useState(false);

  useEffect(function() {
    async function load() {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
      const data = await res.json();
      setPost(data);
      const authorRes = await fetch('https://jsonplaceholder.typicode.com/users/' + data.userId);
      const authorData = await authorRes.json();
      setAuthor(authorData);
      const commentsRes = await fetch('https://jsonplaceholder.typicode.com/posts/' + id + '/comments');
      const commentsData = await commentsRes.json();
      setComments(commentsData);
    }
    load();
  }, [id]);

  async function updatePost(post) {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post)
    });
    const data = await res.json();
    setPost(data);
    setEditing(false);
  }

  async function deletePost() {
    const ok = window.confirm('Delete this post?');
    if (!ok) return;
    await fetch('https://jsonplaceholder.typicode.com/posts/' + id, { method: 'DELETE' });
    navigate('/posts');
  }

  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <h2>Post Detail</h2>
      <PostCard post={post} />
      <p>Author: {author ? author.name : ''}</p>
      <button onClick={function() { setEditing(true); }}>Edit</button>
      <button onClick={deletePost}>Delete</button>
      {editing && <PostForm initial={post} onSubmit={updatePost} onCancel={function() { setEditing(false); }} />}
      <h3>Comments</h3>
      <ul>{comments.map(function(c) { return <li key={c.id}>{c.email}: {c.body}</li>; })}</ul>
    </div>
  );
}

export default PostDetail;
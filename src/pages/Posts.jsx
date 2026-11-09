import { useState } from 'react';
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';

function Posts(props) {
  const [showForm, setShowForm] = useState(false);

  async function createPost(post) {
    await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post)
    });
    setShowForm(false);
  }

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={function() { setShowForm(true); }}>Add Post</button>
      {showForm && <PostForm onSubmit={createPost} onCancel={function() { setShowForm(false); }} />}
      <div>
        <PostList />
      </div>
    </div>
  );
}

export default Posts;
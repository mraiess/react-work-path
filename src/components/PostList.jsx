import { useState, useEffect } from 'react';

function PostList(props) {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [userId, setUserId] = useState('');

  useEffect(function() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(function(res) { return res.json(); })
      .then(function(data) { setPosts(data); });
  }, []);

  const filtered = posts.filter(function(p) {
    const matchTitle = p.title.toLowerCase().includes(search.toLowerCase());
    const matchUser = userId === '' || String(p.userId) === userId;
    return matchTitle && matchUser;
  });

  return (
    <div>
      <input placeholder="Search by title" value={search} onChange={function(e) { setSearch(e.target.value); }} />
      <input placeholder="Filter userId" value={userId} onChange={function(e) { setUserId(e.target.value); }} />
      <ul>
        {filtered.map(function(p) {
          return (
            <li key={p.id} style={{ cursor: 'pointer' }} onClick={function() { props.onSelect(p); }}>
              {p.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}


export default PostList;

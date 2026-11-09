import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function UserList(props) {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(function() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(function(res) { return res.json(); })
      .then(function(data) { setUsers(data); });
  }, []);

  const filtered = users.filter(function(u) {
    return u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      <input
        placeholder="Search by name or email"
        value={search}
        onChange={function(e) { setSearch(e.target.value); }}
      />
      <ul>
        {filtered.map(function(u) {
          return (
            <li key={u.id}>
              <Link to={'/users/' + u.id}>{u.name}</Link> - {u.username} - {u.email} - {u.address.city}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default UserList;
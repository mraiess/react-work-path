import { useState } from 'react';
import UserList from '../components/UserList';
import UserForm from '../components/UserForm';

function Users(props) {
  const [showForm, setShowForm] = useState(false);

  async function createUser(user) {
    await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    });
    setShowForm(false);
  }

  return (
    <div>
      <h2>Users</h2>
      <button onClick={function() { setShowForm(true); }}>Add User</button>
      {showForm && <UserForm onSubmit={createUser} onCancel={function() { setShowForm(false); }} />}
      <div>
        <UserList />
      </div>
    </div>
  );
}

export default Users;
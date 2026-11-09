import { useState } from 'react';

function UserForm(props) {
  const [name, setName] = useState(props.initial ? props.initial.name : '');
  const [username, setUsername] = useState(props.initial ? props.initial.username : '');
  const [email, setEmail] = useState(props.initial ? props.initial.email : '');
  const [city, setCity] = useState(props.initial ? props.initial.address.city : '');

  function submit(e) {
    e.preventDefault();
    const user = {
      name: name,
      username: username,
      email: email,
      address: { city: city }
    };
    props.onSubmit(user);
  }

  return (
    <form onSubmit={submit}>
      <input placeholder="Name" value={name} onChange={function(e) { setName(e.target.value); }} />
      <input placeholder="Username" value={username} onChange={function(e) { setUsername(e.target.value); }} />
      <input placeholder="Email" value={email} onChange={function(e) { setEmail(e.target.value); }} />
      <input placeholder="City" value={city} onChange={function(e) { setCity(e.target.value); }} />
      <button type="submit">Save</button>
      <button type="button" onClick={props.onCancel}>Cancel</button>
    </form>
  );
}


export default UserForm;

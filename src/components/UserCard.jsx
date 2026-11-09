function UserCard(props) {
  const u = props.user;
  return (
    <div style={{ border: '1px solid #ccc', padding: 10, margin: 10 }}>
      <h3>{u.name}</h3>
      <p>Username: {u.username}</p>
      <p>Email: {u.email}</p>
      <p>City: {u.address.city}</p>
      <p>Phone: {u.phone}</p>
      <p>Website: {u.website}</p>
      <p>Company: {u.company.name}</p>
    </div>
  );
}


export default UserCard;

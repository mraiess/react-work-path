import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <nav style={{ padding: 10, borderBottom: '1px solid #ccc' }}>
      <Link to="/" style={{ marginRight: 10 }}>Home</Link>
      <Link to="/users" style={{ marginRight: 10 }}>Users</Link>
      <Link to="/posts" style={{ marginRight: 10 }}>Posts</Link>
      <Link to="/todos">Todos</Link>
    </nav>
  );
}
export default Navbar;

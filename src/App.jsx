import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Users from './pages/Users';
import UserDetail from './pages/UserDetail';
import Posts from './pages/Posts';
import PostDetail from './pages/PostDetail';
import Todos from './pages/Todos';
import TodoDetail from './pages/TodoDetail';

function App(props) {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ padding: 20 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<UserDetail />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/todos/:id" element={<TodoDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
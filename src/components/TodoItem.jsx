import { Link } from 'react-router-dom';

function TodoItem(props) {
  const t = props.todo;
  return (
    <li>
      <Link to={'/todos/' + t.id}>{t.title}</Link> - {t.completed ? 'done' : 'todo'}
      <button onClick={function() { props.onToggle(t); }}>Toggle</button>
      <button onClick={function() { props.onDelete(t.id); }}>Delete</button>
    </li>
  );
}

export default TodoItem;
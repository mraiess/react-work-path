function TodoItem(props) {
  const t = props.todo;
  return (
    <li>
      <span>{t.title} - {t.completed ? 'done' : 'todo'}</span>
      <button onClick={function() { props.onToggle(t); }}>Toggle</button>
      <button onClick={function() { props.onDelete(t.id); }}>Delete</button>
    </li>
  );
}


export default TodoItem;

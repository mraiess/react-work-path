import { useState } from 'react';
import TodoItem from './TodoItem';

function TodoList(props) {
  const [filter, setFilter] = useState('all');
  const [userId, setUserId] = useState('');

  const filtered = props.todos.filter(function(t) {
    const matchFilter = filter === 'all' || (filter === 'done' && t.completed) || (filter === 'todo' && !t.completed);
    const matchUser = userId === '' || String(t.userId) === userId;
    return matchFilter && matchUser;
  });

  const total = filtered.length;
  const done = filtered.filter(function(t) { return t.completed; }).length;
  const remaining = total - done;

  return (
    <div>
      <button onClick={function() { setFilter('all'); }}>All</button>
      <button onClick={function() { setFilter('done'); }}>Done</button>
      <button onClick={function() { setFilter('todo'); }}>Todo</button>
      <input placeholder="Filter userId" value={userId} onChange={function(e) { setUserId(e.target.value); }} />
      <p>Total: {total} Done: {done} Remaining: {remaining}</p>
      <ul>
        {filtered.map(function(t) {
          return (
            <TodoItem
              key={t.id}
              todo={t}
              onToggle={props.onToggle}
              onDelete={props.onDelete}
            />
          );
        })}
      </ul>
    </div>
  );
}


export default TodoList;

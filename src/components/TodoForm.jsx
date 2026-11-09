import { useState } from 'react';

function TodoForm(props) {
  const [userId, setUserId] = useState(props.initial ? props.initial.userId : '');
  const [title, setTitle] = useState(props.initial ? props.initial.title : '');
  const [completed, setCompleted] = useState(props.initial ? props.initial.completed : false);

  function submit(e) {
    e.preventDefault();
    const todo = { userId: Number(userId), title: title, completed: completed };
    props.onSubmit(todo);
  }

  return (
    <form onSubmit={submit}>
      <input placeholder="User id" value={userId} onChange={function(e) { setUserId(e.target.value); }} />
      <input placeholder="Title" value={title} onChange={function(e) { setTitle(e.target.value); }} />
      <label>
        <input type="checkbox" checked={completed} onChange={function(e) { setCompleted(e.target.checked); }} />
        Completed
      </label>
      <button type="submit">Save</button>
      <button type="button" onClick={props.onCancel}>Cancel</button>
    </form>
  );
}

export default TodoForm;

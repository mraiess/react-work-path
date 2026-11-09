import { useState } from 'react';

function PostForm(props) {
  const [userId, setUserId] = useState(props.initial ? props.initial.userId : '');
  const [title, setTitle] = useState(props.initial ? props.initial.title : '');
  const [body, setBody] = useState(props.initial ? props.initial.body : '');

  function submit(e) {
    e.preventDefault();
    const post = { userId: Number(userId), title: title, body: body };
    props.onSubmit(post);
  }

  return (
    <form onSubmit={submit}>
      <input placeholder="User id" value={userId} onChange={function(e) { setUserId(e.target.value); }} />
      <input placeholder="Title" value={title} onChange={function(e) { setTitle(e.target.value); }} />
      <textarea placeholder="Body" value={body} onChange={function(e) { setBody(e.target.value); }} />
      <button type="submit">Save</button>
      <button type="button" onClick={props.onCancel}>Cancel</button>
    </form>
  );
}

export default PostForm;

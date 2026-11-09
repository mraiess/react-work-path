function PostCard(props) {
  const p = props.post;
  return (
    <div style={{ border: '1px solid #ccc', padding: 10, margin: 10 }}>
      <h3>{p.title}</h3>
      <p>{p.body}</p>
      <p>Author id: {p.userId}</p>
    </div>
  );
}

export default PostCard;

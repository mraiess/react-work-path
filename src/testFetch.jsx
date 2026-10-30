import { useState } from "react";

function TestFetch() {
    const [posts, setPosts] = useState([]);
    function getPosts() {
        const getData = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts")
            const posts = await response.json()
            return posts;
        }
        getData().then((posts) => setPosts(posts));

    }
    return (
        <div>
            list des posts <button onClick={getPosts}>recupere les posts</button>
            {
                posts.map(post => (
                    <div ket={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                ))
            }
        </div>
    );
}
export default TestFetch;
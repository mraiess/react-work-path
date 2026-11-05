import axios from "axios";
import { useState } from "react";

function PostList() {
    const [posts, setPosts] = useState([]);
    async function getPosts() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(response.data);
        console.log(response.data);
    }
    return (
        <>
            <button onClick={getPosts}>Get Users</button>
            <UserCard users={posts} />
        </>
    );
}
export default PostList;
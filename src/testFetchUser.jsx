import { useState } from "react";

function TestFetch() {
    const [users, setUsers] = useState([]);
    function getUsers() {
        const getData = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/users")
            const users = await response.json()
            return users;
        }
        getData().then((users) => setUsers(users));

    }
    return (
        <div>
            list des users <button onClick={getUsers}>recupere les posts</button>
            {
                users.map(usr => (
                    <div ket={usr.id}>
                        <h2>{usr.title}</h2>
                        <p>{usr.body}</p>
                    </div>
                ))
            }
        </div>
    );
}
export default TestFetch;
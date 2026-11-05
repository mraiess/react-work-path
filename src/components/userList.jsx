import axios from "axios";
import { useState } from "react";
import UserCard from "../components/userCard";

function UserList() {
    const [users, setUsers] = useState([]);
    async function getUsers() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
        console.log(response.data);
    }
    return (
        <>
            <button onClick={getUsers}>Get Users</button>
            <UserCard users={users} />
        </>
    );
}
export default UserList;
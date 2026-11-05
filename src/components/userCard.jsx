function UserCard({ users = [] }) {
    return (
        <div>
            {users.map(user => (
                <div key={user.id} style={{ border: '1px solid #ccc', margin: '8px', padding: '8px' }}>
                    <p>information:</p>
                    <p>id: {user.id}</p>
                    <p>name: {user.name}</p>
                    <p>prenom: {user.username}</p>
                    <p>email: {user.email}</p>
                    <p>phone: {user.phone}</p>
                    <p>website: {user.website}</p>
                    <p>entreprise: {user.company?.name}</p>
                    <p>ville: {user.address?.city}</p>
                </div>
            ))}
        </div>
    );
}
export default UserCard;
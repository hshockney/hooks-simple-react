import React from 'react';
import useResources from './useResources';
const UserList = () => {
    const users = useResources('users');
    return (
        <React.Fragment>
        <h2>Users</h2>
        <ul>
            {users.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
        </React.Fragment>
    );
}
export default UserList;
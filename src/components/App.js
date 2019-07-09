import React, { useState } from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';
const App = () => {
    const [resource, setResource] = useState('Posts');
        return(
            <div className="ui container">
                <UserList />
                <div>
                    <button className="ui button primary" onClick={() => setResource('Posts')}>Posts</button>
                    <button className="ui button positive" onClick={() => setResource('Todos')}>Todos</button>
                </div>
                <h2><ResourceList resource={resource} /></h2>
            </div>
        );
}
export default App;
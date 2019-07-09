import React, { useState } from 'react';

const App = () => {
    const [resource, setResource] = useState('Posts');
        return(
            <div className="ui container">
                <div>
                    <button className="ui button primary" onClick={() => setResource('Posts')}>Posts</button>
                    <button className="ui button positive" onClick={() => setResource('Todos')}>Todos</button>
                </div>
                <h2>{resource}</h2>
            </div>
        );
}
export default App;
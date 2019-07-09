import React from 'react';

class App extends React.Component {
    state = { resource: 'Posts'};
    render() {
        return(
            <div className="ui container">
                <div>
                    <button className="ui button primary" onClick={() =>this.setState({resource: 'Posts'})}>Posts</button>
                    <button className="ui button positive" onClick={() =>this.setState({resource: 'Todos'})}>Todos</button>
                </div>
                <h2>{this.state.resource}</h2>
            </div>
        )
    }
}
export default App;
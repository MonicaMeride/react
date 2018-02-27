import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// this component will be rendered by our <___Router>
class App extends Component {
    render() {
        return (
            <div className="listeseriestyle">
                <h1 className="App-title">Bienvenue dans un monde extraordinaire.</h1>
                <iframe src="https://giphy.com/embed/3o7bu8LNPDbmXMhAys" width="480" height="270" frameBorder="0" class="giphy-embed" ></iframe>
            </div>
        );
    }
}
export default App;
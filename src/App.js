import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Topics from './Components/Topics'
import Nav from './Components/Nav'

class App extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <hr/>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/topics" component={Topics}/>
            </div>
        );
    }
}

export default App;
/**
 * Created by ZhaoLiang on 2017/5/17.
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Nav extends Component {

    render () {
        return (
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/topics">Topics</Link></li>
            </ul>
        )
    }
}

export default Nav;
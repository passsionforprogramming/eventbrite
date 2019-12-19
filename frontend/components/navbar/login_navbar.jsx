import React from 'react';
import SearchBar from '../search_bar/search_bar';
import { NavLink } from 'react-router-dom';
const LoginNavBar = ({ currentUser, logout, }) => {
    const condition = currentUser ? <li><NavLink to="/">Sign Out</NavLink></li> :
        <li><NavLink to="/signin">Sign In</NavLink></li>;
    return (
        <div>
            <nav className="navbar login">
                <ul className="nav-list">
                    <li><p className="logo login-logo">haply</p></li>
                    <li><SearchBar /></li>
                    <span className="right">
                        <li><NavLink to="#">Browse</NavLink></li>
                    <li className="help"><NavLink to="#">Help</NavLink>
                        <ul className="drop-down">
                            <li><NavLink to="#">How it Works</NavLink></li>
                            <li><NavLink to="#">What it costs to create an event.</NavLink></li>
                            <li><NavLink to="#">Blog</NavLink></li>
                            <li><NavLink to="#">Resources</NavLink></li>
                        </ul>
                    </li>
                    {condition}
                    </span>
                </ul>
            </nav>
        </div>
    )
}

export default LoginNavBar;
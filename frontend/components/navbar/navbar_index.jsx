import React from 'react';
import SearchBar from '../search_bar/search_bar';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
const NavBarIndex = ({ currentUser, logout, }) => {
    const condition = currentUser ? <li onClick={() => logout()}><NavLink to="/signin">Sign Out</NavLink></li> :
        <li><NavLink to="/signin">Sign In</NavLink></li>;
    return (
        <div>
            <nav className="navbar">
                <ul className="nav-list">
                    <li><p className="logo">haply</p></li>
                    <li><SearchBar /></li>
                    <span className="right">
                    {/* <li className="organize"><NavLink to="#">Organize</NavLink>
                        <ul className="drop-down">
                            <li><NavLink to="#">Overview</NavLink></li>
                            <li><NavLink to="#">Pricing</NavLink></li>
                            <li><NavLink to="#">Blog</NavLink></li>
                            <li><NavLink to="#">Resources</NavLink></li>
                        </ul>
                    </li>
                    <li className="help"><NavLink to="#">Help</NavLink>
                        <ul className="drop-down">
                            <li><NavLink to="#">How it Works</NavLink></li>
                            <li><NavLink to="#">What it costs to create an event.</NavLink></li>
                            <li><NavLink to="#">Blog</NavLink></li>
                            <li><NavLink to="#">Resources</NavLink></li>
                        </ul>
                    </li> */}
                    <li><NavLink to="/createEvent">Create Event</NavLink></li>
                    {condition}
                    </span>
                </ul>
            </nav>
        </div>
    )
}

const mapStateToProps = ({ session, entities: { users } }) => ({
    currentUser: users[session.id]
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBarIndex);
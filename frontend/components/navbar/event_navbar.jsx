import React from 'react';
import SearchBar from '../search_bar/search_bar';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
const EventNavbar = props => {
    const condition = props.currentUser ? <li className="profile"><NavLink to="#"><FontAwesomeIcon icon={faUserCircle} className="profile-icon" /><span className="arrow-down black"></span></NavLink>
        <ul className="drop-down drop-down-right">
            <li onClick={() => props.logout()}><NavLink to="#">Logout</NavLink></li>
            <li><NavLink to="/manage">Manage Events</NavLink></li>
            <li><NavLink to="/likes">Liked</NavLink></li>
            <li><NavLink to="/tickets">Tickets</NavLink></li>
        </ul>
    </li> : <li><NavLink to="/signin">Sign In</NavLink></li>
    return (
        <nav className="event-nav-bar">
            <ul className="event-nav-list">
                <li className="logo login-logo" onClick={() => props.history.push("/")}>haply</li>
                <li><SearchBar /></li>
                <li><NavLink to="/browse_events">Browse Events</NavLink></li>
                <li><NavLink to="/createEvent">Create Event</NavLink></li>
                {condition}
            </ul>
        </nav>
    );
};

const mapStateToProps = ({ session, entities: { users } }) => ({
    currentUser: users[session.id]
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventNavbar));


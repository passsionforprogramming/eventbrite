import React from 'react';
import SearchBar from '../search_bar/search_bar';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faTicketAlt } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
const SignedInNavBar = (props) => {
    return (
        <div>
            <nav className="navbar">
                <ul className="nav-lists">
                    <li><p className="logo" onClick={() => props.history.push("/")}>haply</p></li>
                    <li><SearchBar /></li>
                    <span className="right">
                        <li>
                            <NavLink to="/createEvent"><span className="row-icon"><FontAwesomeIcon icon={faPlus} color="white" />Create Event</span></NavLink>
                            </li>
                        <li>
                            <NavLink to="/likes"><span className="row-icon"><FontAwesomeIcon icon={faHeart} color="white" />Likes</span></NavLink>
                        </li>
                        <li>
                            <NavLink to="/tickets"><span className="row-icon"><FontAwesomeIcon icon={faTicketAlt} color="white" />Tickets</span></NavLink>
                        </li>
                        <li className="profile"><NavLink to="#"><FontAwesomeIcon icon={faUserCircle} className="profile-icon" /><span className="arrow-down"></span></NavLink>
                            <ul className="drop-down dropdown-left">
                                <li onClick={() => props.logout()}><NavLink to="#">Logout</NavLink></li>
                                <li><NavLink to="/manage">Manage Events</NavLink></li>
                                <li><NavLink to="/likes">Liked</NavLink></li>
                                <li><NavLink to="/tickets">Tickets</NavLink></li>
                            </ul>
                        </li>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignedInNavBar);
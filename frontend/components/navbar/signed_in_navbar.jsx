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
            <nav className="login">
                <ul className="nav-lists">
                    <li><p className="logo login-logo">haply</p></li>
                    <li><SearchBar /></li>
                    <span className="right">
                        <li>
                            <NavLink to="#"><span className="row-icon"><FontAwesomeIcon icon={faPlus} color="black" />Create Event</span></NavLink>
                            </li>
                        <li>
                            <NavLink to="#"><span className="row-icon"><FontAwesomeIcon icon={faHeart} color="black" />Likes</span></NavLink>
                        </li>
                        <li>
                            <NavLink to="#"><span className="row-icon"><FontAwesomeIcon icon={faTicketAlt} color="black" />Tickets</span></NavLink>
                        </li>
                        <li className="profile"><NavLink to="#"><FontAwesomeIcon icon={faUserCircle} className="profile-icon" /><i className="arrow down"></i></NavLink>
                            <ul className="drop-down">
                                <li><NavLink to="#">How it Works</NavLink></li>
                                <li><NavLink to="#">What it costs to create an event.</NavLink></li>
                                <li><NavLink to="#">Blog</NavLink></li>
                                <li><NavLink to="#">Resources</NavLink></li>
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
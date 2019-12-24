import React from 'react';
import SearchBar from '../search_bar/search_bar';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faTicketAlt } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
const SignedInNavBar = (props) => {
    const condition = props.currentUser ? <li onClick={() => props.logout()}><NavLink to="/signin">Sign Out</NavLink></li> :
        <li><NavLink to="/signin">Sign In</NavLink></li>;
    return (
        <div>
            <nav className="login">
                <ul className="nav-list">
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

const mapStateToProps = ({ session, entities: { users } }) => ({
    currentUser: users[session.id]
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignedInNavBar);
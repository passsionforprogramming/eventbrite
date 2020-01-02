import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
const SignedInNavBar = (props) => {
    return (
        <div>
            <nav className="login basic-info-nav">
                <ul className="nav-lists">
                    <li><p className="logo">haply</p></li>
                    <span className="right">
                        <li className="help"><NavLink to="#">Help<span className="arrow-down"></span></NavLink>
                            <ul className="drop-down">
                                <li><NavLink to="#">How it Works</NavLink></li>
                                <li><NavLink to="#">What it costs to create an event.</NavLink></li>
                                <li><NavLink to="#">Blog</NavLink></li>
                                <li><NavLink to="#">Resources</NavLink></li>
                            </ul>
                        </li>
                        <li className="profile"><NavLink to="#"><FontAwesomeIcon icon={faUserCircle} className="profile-icon" /><span className="arrow-down"></span></NavLink>
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
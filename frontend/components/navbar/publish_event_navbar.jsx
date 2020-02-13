import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
const PublishEventNavBar = (props) => {
    return (
        <div>
            <nav className="login basic-info-nav" onClick={() => props.history.push("/")}>
                <ul className="nav-lists">
                    <li><p className="logo">haply</p></li>
                    <span className="right">
                        <li>
                            <NavLink to="#">Preview</NavLink>
                        </li>
                        <li className="publish-event"> <NavLink to="">Publish Event <span className="arrow-down"></span></NavLink>
                        <ul className="drop-down">
                            <li><NavLink to="#">Publish Now</NavLink></li>
                            <li><NavLink to="#">Schedule Publish</NavLink></li>
                        </ul>
                        </li>
                        <li className="more"> <NavLink to="">More <span className="arrow-down"></span></NavLink>
                            <ul className="drop-down">
                                <li><NavLink to="#">Copy Event</NavLink></li>
                                <li><NavLink to="#">Cancel Event</NavLink></li>
                                <li><NavLink to="#">Product Updates</NavLink></li>
                                <li><NavLink to="#">Help Center</NavLink></li>
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

export default connect(mapStateToProps, mapDispatchToProps)(PublishEventNavBar);
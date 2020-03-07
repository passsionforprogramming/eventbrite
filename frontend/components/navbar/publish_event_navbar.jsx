import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { publishEvent } from '../../actions/event_actions';
const PublishEventNavBar = (props) => {
    const regex = /\d*/g;
    const eventId = props.location.pathname.match(regex).join("");
    return (
        <div>
            <nav className="login basic-info-nav">
                <ul className="nav-lists">
                    <li><p className="logo" onClick={() => props.history.push("/")}>haply</p></li>
                    <span className="right">
                        <li>
                            <NavLink to="#">Preview</NavLink>
                        </li>
                        <li className="publish-event"> <NavLink to="#">Publish Event <span className="arrow-down"></span></NavLink>
                        <ul className="drop-down">
                                <li onClick={() => {
                                    const { event } = props;
                                    const myEvent = {
                                        id: eventId,
                                        title: event.title,
                                        category: event.category,
                                        eventType: event.eventType,
                                        organizer: event.organizer,
                                        start_time: event.startDate,
                                        end_time: event.endDate,
                                        location_address: event.address,
                                        location_type: event.addressType,
                                        lat: event.lat,
                                        lon: event.lng,
                                        description: event.description,
                                        display_start_time: event.displayStartTime,
                                        display_end_time: event.displayEndTime,
                                        status: "published",
                                        published: true,
                                        tags: event.tags
                                    };
                                    props.publishEvent(myEvent, props).then(evt => props.history.replace(`/event/${evt.id}`));
                                }}><p>Publish Now</p></li>
                            <li><NavLink to="#">Schedule Publish</NavLink></li>
                        </ul>
                        </li>
                        <li className="more"> <NavLink to="#">More <span className="arrow-down"></span></NavLink>
                            <ul className="drop-down">
                                <li><NavLink to="#">Copy Event</NavLink></li>
                                <li><NavLink to="#">Cancel Event</NavLink></li>
                            </ul>
                        </li>
                        <li className="profile"><NavLink to="#"><FontAwesomeIcon icon={faUserCircle} className="profile-icon" /><span className="arrow-down"></span></NavLink>
                            <ul className="drop-down drop-down-right">
                                <li onClick={() => props.logout()}><NavLink to="#">Logout</NavLink></li>
                                <li><NavLink to="/manage">Manage Events</NavLink></li>
                                <li><NavLink to="/likes">Liked</NavLink></li>
                                <li><NavLink to="#">Tickets</NavLink></li>
                            </ul>
                        </li>
                    </span>
                </ul>
            </nav>
        </div>
    )
}

const mapStateToProps = ({ session, entities: { users, event } }) => ({
    currentUser: users[session.id],
    event
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    publishEvent: (event, props) => dispatch(publishEvent(event, props))
});

export default connect(mapStateToProps, mapDispatchToProps)(PublishEventNavBar);
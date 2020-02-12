import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareSquare } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { likeEvent } from '../../actions/like_actions';
const Thumbnail = (props) => {
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    const thumbDate = new Date(props.eventTime);
    return (
        <div className="thumbnail">
            <Link to={`/event/${props.id}`}><img src={props.imageUrl} className="thumbnail-img" /></Link>
            <div className="space-between"> <FontAwesomeIcon icon={faShareSquare} className="share" />
                <FontAwesomeIcon icon={faHeart} color="red" onClick={() => {
                    console.log("button clicked");
                    props.like(props.id, props.currentUserId);
                }} className="heart"/>
            </div>
            <p className="thumbnail-time">{thumbDate.toLocaleDateString('en-US', options)}</p>
            <p className="thumbnail-name">{props.title}</p>
            <p className="thumb-location">{props.address}</p>
        </div>
    )
}


const mapStateToProps = state => ({
    currentUserId: state.session.id,

});

const mapDispatchToProps = dispatch => ({
    like: (eventId, userId) => dispatch(likeEvent(eventId, userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Thumbnail)
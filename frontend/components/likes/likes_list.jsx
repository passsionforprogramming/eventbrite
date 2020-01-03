import React from 'react';
import { connect } from 'react-redux';
import { fetchLikeEvents } from '../../actions/like_actions';
import Thumbnail from '../event_display/thumbnail';
import { likeEvent } from '../../actions/like_actions';
class LikesList extends React.Component {
    componentDidMount(){
        this.props.fetchLikeEvents();
    }
    render(){
        return (
            <div className="like-list">
                <p className="basic-info-header">Favorite Events</p>
                {
                    this.props.events.map(event => (
                        <Thumbnail
                            eventTime={event.eventTime}
                            title={event.title}
                            imageUrl={event.imageUrl}
                            address={event.address}
                            key={event.id}
                            id={event.id}
                             />
                    ))
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    events: Object.values(state.entities.likedEvents),
    currentUserId: state.session.id
});

const mapDispatchToProps = dispatch => ({
    fetchLikeEvents: () => dispatch(fetchLikeEvents()),
    like: (eventId, userId) => dispatch(likeEvent(eventId, userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(LikesList);
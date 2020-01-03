import React from 'react';
import { connect } from 'react-redux';
import { requestEvent } from '../../actions/event_actions';
class ShowEvent extends React.Component {
    componentDidMount(){
        this.props.requestEvent(this.props.match.params.eventId);
    }
    render(){
        const { event } = this.props;
        const startDate = new Date(event.startDate);
        const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
        return (
            <div className="event-show">
                <div className="event-back-img">

                </div>
                <div className="show-card">
                    <div className="img-aspect">
                        <img src={event.imageUrl} className="show-evt-img" />
                    </div>
                    <p className="evt-show-title">{event.title}</p>
                    <p className="organizer">by {event.organizer}</p>
                    <p className="evt-show-date">{startDate.toLocaleDateString('en-US', options)}</p>
                    <p className="evt-address">{event.address}</p>
                    <p className="evt-show-description">{event.description}</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    event: state.entities.event
});

const mapDispatchToProps = dispatch => ({
    requestEvent: eventId => dispatch(requestEvent(eventId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowEvent);
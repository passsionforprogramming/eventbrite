import React from 'react';
import { connect } from 'react-redux';
import { displayEventThunk } from '../../actions/event_actions';
import TicketModal from '../tickets/modal/ticket_modal';
class ShowEvent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showModal: false
        }
    }
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
                {this.state.showModal && <TicketModal 
                id={this.props.match.params.eventId}
                date={startDate}
                title={event.title}/>}
                <div className="show-card">
                    <div className="img-aspect">
                        <img src={event.imageUrl} className="show-evt-img" />
                    </div>
                    {
                        event.has_batches ? <button className="grn-btn"
                            onClick={() => this.setState({ showModal: true })}>Tickets</button> :
                            <button className="grn-btn dull" disabled>Tickets(0)</button>
                    }
                    <p className="evt-show-title">{event.title}</p>
                    <p className="organizer">by {event.organizer}</p>
                    <p className="evt-show-date">{startDate.toLocaleDateString('en-US', options)}</p>
                    <p className="evt-address">{event.address}</p>
                    <p className="description-header">About this event</p>
                    <p className="evt-show-description">{event.description}</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    event: state.entities.displayEvent
});

const mapDispatchToProps = dispatch => ({
    requestEvent: eventId => dispatch(displayEventThunk(eventId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowEvent);
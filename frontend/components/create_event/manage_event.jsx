import React from 'react';
import { requestEvent } from '../../actions/event_actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MainEventContent from './main_event_content';
import UpdateAndContinue from './update_and_continue';
 class ManageEvents extends React.Component {
     componentDidMount(){
         this.props.requestEvent(this.props.match.params.eventId);
     }
    render(){
        const { startDate } = this.props;
        const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
        return (
            <div className="manage-events">
                <div id="navigator">
                    <p className="navigator-event-title">{this.props.title}</p>
                    <p className="event-date">{startDate.toLocaleDateString('en-US', options)}</p>
                    <p className="switch-event"><Link to="#">Switch Event</Link></p>
                    <div className="background-selector"><Link to={`/manageEvents/${this.props.match.params.eventId}/basicInfo`} replace className="link-selectors"><p className="circle-border">1</p><p>Basic Info</p></Link></div>
                    <div className="background-selector"><Link to={`/manageEvents/${this.props.match.params.eventId}/details`} className="link-selectors"><p className="circle-border">2</p><p>Details</p></Link></div>
                    <div className="background-selector last-child"><Link to={`/manageEvents/${this.props.match.params.eventId}/tickets`} className="link-selectors"><p className="circle-border">3</p><p>Tickets</p></Link></div>
                    <div className="background-selector"><Link to="#" className="link-selectors"><p>Dashboard</p></Link></div>
                    <div className="background-selector"><Link to="#" className="link-selectors"><p>Order Options</p></Link></div>
                    <div className="background-selector"><Link to="#" className="link-selectors"><p>Invite & Promote</p></Link></div>
                    <div className="background-selector"><Link to="#" className="link-selectors"><p>Manage Attendees</p></Link></div>
                </div>
                <div className="main-event-update">
                    <MainEventContent />
                </div>
                <UpdateAndContinue />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    title: state.entities.event.title,
    startDate: state.entities.event.startDate
});

const mapDispatchToProps = dispatch => ({
    requestEvent: (eventId) => dispatch(requestEvent(eventId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ManageEvents)
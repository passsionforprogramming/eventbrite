import React from 'react';
import ManageEventList from './manage_event_list';
import { connect } from 'react-redux';
import { fetchUserEvents, resetEvent } from '../actions/event_actions';
class Manage extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        console.log("We are in the component did mount");
        this.props.fetchUserEvents();
    }
    render(){
        return (
            <div className="manage">
                <div className="row">
                    <p className="basic-info-header">Events</p>
                    <button className="red-button" onClick={() => {
                        this.props.resetEvent();
                        this.props.history.push('/createEvent');
                    }}>
                        Create Event
                    </button>
                </div>
                <div className="manage-title-bar">
                    <p>Event</p>
                    <p>Sold</p>
                    <p>Gross</p>
                    <p>Status</p>
                </div>
                <ManageEventList events={this.props.events}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    events: state.entities.userEvents
});

const mapDispatchToProps = dispatch => ({
    fetchUserEvents: () => dispatch(fetchUserEvents()),
    resetEvent: () => dispatch(resetEvent())
});

export default connect(mapStateToProps, mapDispatchToProps)(Manage);

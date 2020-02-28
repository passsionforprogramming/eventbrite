import React from 'react';
import { connect } from 'react-redux';
import { submitEvent } from '../../actions/event_actions';
import { withRouter } from "react-router";
class SaveAndContinue extends React.Component {
    constructor(props){
        super(props);
    }
    handleSubmit = e => {
        e.preventDefault();
        const { event, title, location, currentUser, submitEvent } = this.props;
        const formEvent = {
            title: event.title,
            user_id: currentUser.id,
            category: event.category,
            eventType: event.eventType,
            organizer: event.organizer,
            start_time: event.startDate,
            end_time: event.endDate,
            location_address: event.address,
            location_type: event.addressType,
            lat_lon: `POINT(${event.lng} ${event.lat})`,
            // lat: event.lat,
            // lon: event.lng,
            display_start_time: event.displayStartTime,
            display_end_time: event.displayEndTime,
            status: "draft",
            tags: event.tags
        };
        const that = this;
        submitEvent(formEvent).then(evt => {
            that.props.history.replace(`/manageEvents/${evt.id}/basicInfo`);
        });
    }

    render(){

        if (this.props.title.length > 0 && this.props.location.length > 0) {
            return (

                <div className="save-and-continue-modal">
                    <div className="seventy-five-percent-width">

                    </div>
                    <div className="buttons">
                        <button className="discard-button">Discard</button>
                        <button className="save-button" onClick={this.handleSubmit}>Save & Continue</button>
                    </div>
                </div>
            )
        } else return null;
    }
}

const mapStateToProps = state => ({
    title: state.entities.event.title,
    location: state.entities.event.address,
    event: state.entities.event,
    currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
    submitEvent: event => dispatch(submitEvent(event))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SaveAndContinue));
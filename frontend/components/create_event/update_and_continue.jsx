import React from 'react';
import { connect } from 'react-redux';
import { updateEvent } from '../../actions/event_actions';
import { withRouter } from "react-router";
class UpdateAndContinue extends React.Component {
    constructor(props){
        super(props);
    }
    handleSubmit = e => {
        e.preventDefault();
        const { event, title, location, currentUser, updateEvent } = this.props;
        if (event.imageFile) {
            const formData = new FormData();
            formData.append('event[photo]', event.imageFile);
            $.ajax ({
                url: `api/events/${event.id}`,
                method: 'PATCH',
                data: formData,
                contentType: false,
                processData: false
            }).then(event => updateEvent(formEvent)).fail(e => console.log(e.JSON))
        } else {
            const formEvent = {
                id: event.id,
                title: event.title,
                user_id: currentUser.id,
                category: event.category,
                eventType: event.eventType,
                organizer: event.organizer,
                start_time: event.startDate,
                end_time: event.endDate,
                location_address: event.address,
                location_type: event.addressType,
                lat_lon: `POINT(${event.lon} ${event.lat})`,
                // lat: event.lat,
                // lon: event.lng,
                display_start_time: event.displayStartTime,
                display_end_time: event.displayEndTime,
                tags: event.tags,
                description: event.description
            };
            const that = this;
            updateEvent(formEvent).then(() => {
                console.log("event updated");
            });
        }
    }

    render(){
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
    }
}

const mapStateToProps = state => ({
    title: state.entities.event.title,
    location: state.entities.event.address,
    event: state.entities.event,
    currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
    updateEvent: event => dispatch(updateEvent(event))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UpdateAndContinue));
import React from 'react';
import { connect } from 'react-redux';
import { submitEvent } from '../../actions/event_actions';
const SaveAndContinue = (props) => {
    const handleSubmit = e => {
        console.log("test");
    }
    if (props.title.length > 0 && props.location.length > 0){
        return (

            <div className="save-and-continue-modal">
                <div className="seventy-five-percent-width">

                </div>
                <div className="buttons">
                    <button className="discard-button">Discard</button>
                    <button className="save-button" onClick={handleSubmit}>Save & Continue</button>
                </div>
            </div>
        )
    } else return null;
    
}

const mapStateToProps = state => ({
    title: state.entities.event.title,
    location: state.entities.location.address
});

const mapDispatchToProps = dispatch => ({
    submitEvent: event => dispatch(submitEvent(event))
});

export default connect(mapStateToProps, mapDispatchToProps)(SaveAndContinue);
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LoadingIcon from '../../loading/loading_icon';
const ConfirmationModal = props => {
    if (props.tickets.length > 0){
        const ticket = props.tickets[props.tickets.length-1];
        return (
            <div className="ticket-modal">
                <div className="ticket-modal-content">
                    <div className="new-row">
                        <p className="grn-checkmark">
                            &#10003;
                </p>
                        <p className="modal-ticket-name">Thanks for your order!</p>
                    </div>
                    <p className="going-to">YOU'RE GOING TO</p>
                    <p className="basic-info-header">{ticket.name}</p>
                    <div className="two-em">

                    </div>
                    <button className="discard-button" onClick={() => props.history.push(`/tickets`)}>View Tickets</button>
                </div>

            </div>
        )
    } else return <LoadingIcon />
    
}



const mapStateToProps = state => ({
    tickets: state.entities.userTickets
});

const mapDispatchToProps = dispatch => ({

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ConfirmationModal));


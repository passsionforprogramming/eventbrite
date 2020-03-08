import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { connect } from 'react-redux';
import UserTicketList from './user_ticket_list';
import { getCurrentUserTickets } from '../../../actions/ticket_actions';
import LoadingIcon from '../../loading/loading_icon';
class Tickets extends React.Component {
    componentDidMount(){
        this.props.getTickets();
    }
    render(){
        if (this.props.loading) {
            return <LoadingIcon />
        } else 
        return (
            
            <div className="user-tickets">
                <div className="ticket-row">
                    <FontAwesomeIcon icon={faUserCircle} className="profile-ticket"/>
                    <p className="basic-info-header">{this.props.userName}</p>
                </div>
                <p className="tickets-header">Tickets</p>
               {
                    this.props.tickets.length > 0 ? <UserTicketList tickets={this.props.tickets} /> :
                    <div className="basic-info-header">
                        You Don't have any tickets
                    </div>
               }
            </div>
        )
    }
}


const MapStateToProps = state => {
    return {
        tickets: state.entities.userTickets,
        loading: state.ui.loading.loadingForm,
        userName: state.entities.userTickets.length > 0 ? state.entities.userTickets[state.entities.userTickets.length-1].userName : ""
    }
}

const MapDispatchToProps = dispatch => ({
    getTickets: () => dispatch(getCurrentUserTickets())
});

export default connect(MapStateToProps, MapDispatchToProps)(Tickets);
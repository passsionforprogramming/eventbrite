import { connect } from "react-redux";
import { updateName, updateQuantity, updatePrice, updateStartDate, updateEndDate, fetchBatches, createTicket } from '../../actions/ticket_actions';
import Ticket from './ticket';
import {withRouter} from 'react-router-dom';
const mapStateToProps = state => ({
    name: state.entities.currentTicket.name,
    quantity: state.entities.currentTicket.quantity,
    price: state.entities.currentTicket.price,
    startDate: state.entities.currentTicket.startDate,
    endDate: state.entities.currentTicket.endDate,
    ticket: state.entities.currentTicket,
    batches: state.entities.batch.batches
});

const mapDispatchToProps = dispatch => ({
    updateName: name => dispatch(updateName(name)),
    updateQuantity: quantity => dispatch(updateQuantity(quantity)),
    updatePrice: price => dispatch(updatePrice(price)),
    updateStartDate: startDate => dispatch(updateStartDate(startDate)),
    updateEndDate: endDate => dispatch(updateEndDate(endDate)),
    fetchBatches: eventId => dispatch(fetchBatches(eventId)),
    createTicket: ticket => dispatch(createTicket(ticket))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Ticket));

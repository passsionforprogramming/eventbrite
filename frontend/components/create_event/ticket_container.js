import { connect } from "react-redux";
import { updateName, updateQuantity, updatePrice, updateStartDate, updateEndDate } from '../../actions/ticket_actions';
import Ticket from './ticket';
const mapStateToProps = state => ({
    name: state.entities.currentTicket.name,
    quantity: state.entities.currentTicket.quantity,
    price: state.entities.currentTicket.price,
    startDate: state.entities.currentTicket.startDate,
    endDate: state.entities.currentTicket.endDate
});

const mapDispatchToProps = dispatch => ({
    updateName: name => dispatch(updateName(name)),
    updateQuantity: quantity => dispatch(updateQuantity(quantity)),
    updatePrice: price => dispatch(updatePrice(price)),
    updateStartDate: startDate => dispatch(updateStartDate(startDate)),
    updateEndDate: endDate => dispatch(updateEndDate(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(Ticket);

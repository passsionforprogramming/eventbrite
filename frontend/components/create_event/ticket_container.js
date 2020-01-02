import { connect } from "react-redux";
import { updateName, updateQuantity } from '../../actions/ticket_actions';
import Ticket from './ticket';
const mapStateToProps = state => ({
    name: state.entities.currentTicket.name,
    quantity: state.entities.currentTicket.quantity
});

const mapDispatchToProps = dispatch => ({
    updateName: name => dispatch(updateName(name)),
    updateQuantity: quantity => dispatch(updateQuantity(quantity))
});

export default connect(mapStateToProps, mapDispatchToProps)(Ticket);

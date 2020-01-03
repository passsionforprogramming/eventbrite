import { UPDATE_NAME, 
    UPDATE_QUANTITY, 
    UPDATE_PRICE,
    UPDATE_TICKET_END_DATE,
    UPDATE_TICKET_START_DATE } from '../actions/ticket_actions';
const initState = {
    name: "General Admission",
    price: "",
    startDate: new Date(),
    endDate: new Date(),
    quantity: ""
}

const currentTicketReducer = (state = initState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case UPDATE_NAME:
            return { ...state, name: action.name}
        case UPDATE_QUANTITY:
            return {...state, quantity: action.quantity}
        case UPDATE_PRICE:
            return {...state, price: action.price}
        case UPDATE_TICKET_END_DATE:
            return {...state, endDate: action.endDate}
        case UPDATE_TICKET_START_DATE:
            return {...state, startDate: action.startDate}
        default:
            return state;
    }
}

export default currentTicketReducer;
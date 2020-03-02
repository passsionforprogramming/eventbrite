import { UPDATE_NAME, 
    UPDATE_QUANTITY, 
    UPDATE_PRICE,
    UPDATE_TICKET_END_DATE,
    UPDATE_TICKET_START_DATE, EDIT_BATCH, RESET_CURRENT_TICKET } from '../actions/ticket_actions';
const initState = {
    name: "General Admission",
    price: "",
    sale_start_time: new Date(),
    sale_end_time: new Date(),
    quantity: ""
}

const currentTicketReducer = (state = initState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case UPDATE_NAME:
            return { ...state, name: action.name};
        case UPDATE_QUANTITY:
            return {...state, quantity: action.quantity};
        case UPDATE_PRICE:
            return {...state, price: action.price};
        case UPDATE_TICKET_END_DATE:
            return { ...state, sale_end_time: action.endDate};
        case UPDATE_TICKET_START_DATE:
            return { ...state, sale_start_time: action.startDate};
        case EDIT_BATCH:
            return action.batch;
        case RESET_CURRENT_TICKET:
            return initState;
        default:
            return state;
    }
}

export default currentTicketReducer;
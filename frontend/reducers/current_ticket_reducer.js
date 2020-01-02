import { UPDATE_NAME, UPDATE_QUANTITY } from '../actions/ticket_actions';
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
        default:
            return state;
    }
}

export default currentTicketReducer;
import { RECEIVE_USER_TICKETS } from '../actions/ticket_actions';

const UsersTicketsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_USER_TICKETS:
            return action.tickets;
        default:
            return state;
    }
}

export default UsersTicketsReducer;

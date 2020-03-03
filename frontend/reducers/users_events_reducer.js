import { RECEIVE_USER_EVENTS } from '../actions/event_actions';
const initState = [];

const UsersEventsReducer = (state = initState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_USER_EVENTS:
            return action.events
        default:
            return state;
    }
}

export default UsersEventsReducer;
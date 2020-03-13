import { RECEIVE_BROWSE_EVENTS } from '../actions/event_actions';
const BrowseReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_BROWSE_EVENTS:
            return action.events;
        default:
            return state;
    }
}

export default BrowseReducer;
import { RECEIVE_SEARCH_EVENTS } from '../actions/event_actions';
const SearchReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SEARCH_EVENTS:
            return action.events;
        default:
            return state;
    }
}

export default SearchReducer;
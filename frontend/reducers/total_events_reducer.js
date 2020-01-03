import { RECEIVE_ALL_EVENTS } from '../actions/event_actions';
const TotalEventsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_EVENTS:
            return {...state, ...action.events}
           
    
        default:
            return state;
    }
}

export default TotalEventsReducer;
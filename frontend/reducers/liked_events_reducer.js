import { RECEIVE_LIKE_EVENTS, RECEIVE_LIKE_EVENT } from '../actions/like_actions';
const LikedEventsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_LIKE_EVENTS:
            return {...state, ...action.events}
        case RECEIVE_LIKE_EVENT:
            return {...state, ...action.event }
    
        default:
            return state;
    }
}

export default LikedEventsReducer;
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return {...state, [action.currentUser.id]: action.currentUser};
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }
}

export default usersReducer;
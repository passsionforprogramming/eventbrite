import { PREVIOUS_USER } from '../actions/session_actions';
const previousUserReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case PREVIOUS_USER:
            return Object.assign({}, action)
        default:
           return state;
    }
}

export default previousUserReducer;
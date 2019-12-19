import { PREVIOUS_USER, START_LOADING_VERIFY } from '../actions/session_actions';

const initialState = {
  verifyLoading: false
}

const loadingReducer = (state = initialState, action) => {
Object.freeze(state);
switch (action.type) {
  case PREVIOUS_USER:
    return Object.assign({}, state, {verifyLoading: false} )
  case START_LOADING_VERIFY:
    return Object.assign({}, state, {verifyLoading: true})

  default:
    return state;
}
}

export default loadingReducer
import { PREVIOUS_USER, START_LOADING_VERIFY, LOADING_FORM } from '../actions/session_actions';
import { FORM_SUBMITTED } from '../actions/event_actions';
const initialState = {
  verifyLoading: false,
  loadingForm: false
}

const loadingReducer = (state = initialState, action) => {
Object.freeze(state);
switch (action.type) {
  case PREVIOUS_USER:
    return Object.assign({}, state, {verifyLoading: false} );
  case START_LOADING_VERIFY:
    return Object.assign({}, state, {verifyLoading: true});
  case LOADING_FORM:
    return Object.assign({}, state, {loadingForm: true});
  case FORM_SUBMITTED:
    return Object.assign({}, state, {loadingForm: false});
  default:
    return state;
}
}

export default loadingReducer
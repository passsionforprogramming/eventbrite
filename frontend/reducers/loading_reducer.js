import { PREVIOUS_USER, START_LOADING_VERIFY, LOADING_FORM } from '../actions/session_actions';
import { FORM_SUBMITTED, RECEIVE_EVENT } from '../actions/event_actions';
import { RECEIVE_USER_TICKETS } from '../actions/ticket_actions';
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
  case RECEIVE_EVENT:
    return Object.assign({}, state, {loadingForm: false});
  case RECEIVE_USER_TICKETS:
    return Object.assign({}, state, {loadingForm: false});
  default:
    return state;
}
}

export default loadingReducer
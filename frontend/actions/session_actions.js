import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const PREVIOUS_USER = 'PREVIOUS_USER';
export const NOT_PREVIOUS_USER = 'NOT_PREVIOUS_USER';
export const START_LOADING_VERIFY = 'START_LOADING_VERIFY';

export const previousUser = (status, email) => ({
  type: PREVIOUS_USER,
  status,
  email,
})

export const loadingPreviousUser = () => ({
  type: START_LOADING_VERIFY
})

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const signup = user => dispatch => (
  APIUtil.signup(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const login = user => dispatch => (
  APIUtil.login(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const logout = () => dispatch => (
  APIUtil.logout().then(user => (
    dispatch(logoutCurrentUser())
  ))
);

export const verifyPreviousMember = (email) => dispatch => {
  dispatch(loadingPreviousUser);
  return APIUtil.verifyMember().then(data => (
    dispatch(previousUser(data.verify, email))
  ))
  }

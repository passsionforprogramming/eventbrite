export const RECEIVE_LIKE_EVENTS = "RECEIVE_LIKE_EVENTS";
export const RECEIVE_LIKE_EVENT = "RECEIVE_LIKE_EVENT";
import * as APIUtil from '../util/like_api_util';
export const receiveLikeEvents = events => ({
    type: RECEIVE_LIKE_EVENTS,
    events
});

export const receiveLikeEvent = event => ({
    type: RECEIVE_LIKE_EVENT,
    event
});

export const fetchLikeEvents = () => dispatch => (
    APIUtil.fetchLikes().then(events => (
        dispatch(receiveLikeEvents(events))
    ))
);

export const likeEvent = (event_id, user_id) => dispatch => {
    const like = {
        event_id,
        user_id
    };
    return APIUtil.createLike(like).then(event => (
        dispatch(receiveLikeEvent(event))
    ));
}
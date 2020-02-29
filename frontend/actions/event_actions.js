import { loadingForm } from './session_actions';
import { debounce } from '../util/debounce_util';
import * as APIUtil from '../util/event_util';
import * as EventAPIUtil from '../util/event_api_util';
export const UPDATE_TITLE = "UPDATE_TITLE";
export const UPDATE_TYPE = "UPDATE_TYPE";
export const UPDATE_CATEGORY = "UPDATE_CATEGORY";
export const ADD_TAG = "ADD_TAG";
export const REMOVE_TAG = "REMOVE_TAG";
export const UPDATE_ORGANIZER = "UPDATE_ORGANIZER";
export const UPDATE_START_DATE = "UPDATE_START_DATE";
export const UPDATE_END_DATE = "UPDATE_END_DATE";
export const FORM_SUBMITTED = "FORM_SUBMITTED";
export const UPDATE_DISPLAY_START_TIME = "UPDATE_DISPLAY_START_TIME";
export const UPDATE_DISPLAY_END_TIME = "UPDATE_DISPLAY_END_TIME";
export const UPDATE_SINGLE_EVENT = "UPDATE_SINGLE_EVENT";
export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const UPDATE_DESCRIPTION = "UPDATE_DESCRIPTION";
export const UPDATE_IMAGE_FILE = "UPDATE_IMAGE_FILE";
export const RECEIVE_ALL_EVENTS = "RECEIVE_ALL_EVENTS";
export const DISPLAY_EVENT = "DISPLAY_EVENT";
export const RESET_EVENT = "RESET_EVENT";
export const RECEIVE_SEARCH_EVENTS = "RECEIVE_SEARCH_EVENTS";

export const resetEvent = () => ({
    type: RESET_EVENT
});

export const displayEvent = event => ({
    type: DISPLAY_EVENT,
    event
});

export const receiveSearchEvents = events => ({
    type: RECEIVE_SEARCH_EVENTS,
    events
});

export const autoComplete = query => dispatch => {
    EventAPIUtil.autocomplete(query).then(events => {
        dispatch(receiveSearchEvents(events));
    })
}


export const receiveTotalEvents = events => ({
    type: RECEIVE_ALL_EVENTS,
    events
});

export const fetchAllEvents = () => dispatch => (
    EventAPIUtil.fetchEvents().then(events =>
        dispatch(receiveTotalEvents(events)))
);
export const updateImageFile = file => ({
    type: UPDATE_IMAGE_FILE,
    file
});

export const updateDescription = description => ({
         type: UPDATE_DESCRIPTION,
         description
       });

export const receiveEvent = event => ({
    type: RECEIVE_EVENT,
    event
});


export const requestEvent = eventId => dispatch => (
    EventAPIUtil.fetchEvent(eventId).then(event => 
        dispatch(receiveEvent(event)))
);

export const displayEventThunk = eventId => dispatch => (
    EventAPIUtil.fetchEvent(eventId).then(event =>
        dispatch(displayEvent(event)))
)


export const updateStartDate = startDate => ({
         type: UPDATE_START_DATE,
         startDate
       });

export const updateEndDate = endDate => ({
  type: UPDATE_END_DATE,
  endDate
});

export const updateTitle = title => ({
    type: UPDATE_TITLE,
    title
});

export const updateType = eventType => ({
    type: UPDATE_TYPE,
    eventType
});

export const updateCategory = category => ({
    type: UPDATE_CATEGORY,
    category
});

export const addTag = tag => ({
    type: ADD_TAG, 
    tag
});

export const removeTag = tag => ({
    type: REMOVE_TAG,
    tag
});

export const updateOrganizer = organizer => ({
    type: UPDATE_ORGANIZER,
    organizer
});

export const formSubmitted = () => ({
    type: FORM_SUBMITTED,
    submitted: true
});

export const updateDisplayStartTime = val => ({
    type: UPDATE_DISPLAY_START_TIME,
    val
});

export const updateDisplayEndTime = val => ({
    type: UPDATE_DISPLAY_END_TIME,
    val
});

export const updateSingleEvent = val => ({
    type: UPDATE_SINGLE_EVENT,
    val
});

export const submitEvent = event => dispatch => {
    dispatch(loadingForm());
    return APIUtil.submitEvent(event);
}

export const updateEvent = event => dispatch => {
    EventAPIUtil.updateEvent(event).then(event => 
        dispatch(receiveEvent(event)))
    };

export const publishEvent = (event, props) => dispatch => (
    EventAPIUtil.publishEvent(event).then(event => {
        dispatch(resetEvent());
        props.history.replace(`/event/${event.id}`)
    })
)

import { loadingForm } from './session_actions';
import * as APIUtil from '../util/event_util';
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
})

export const submitEvent = event => dispatch => {
    dispatch(loadingForm());
    return APIUtil.submitEvent(event);
}
import {
  UPDATE_TITLE,
  UPDATE_TYPE,
  UPDATE_CATEGORY,
  ADD_TAG,
  REMOVE_TAG,
  UPDATE_ORGANIZER,
  UPDATE_END_DATE,
  UPDATE_START_DATE,
  FORM_SUBMITTED,
  UPDATE_DISPLAY_END_TIME,
  UPDATE_DISPLAY_START_TIME,
  UPDATE_SINGLE_EVENT,
  RECEIVE_EVENT,
  UPDATE_DESCRIPTION,
  UPDATE_IMAGE_FILE
} from "../actions/event_actions";

import { UPDATE_ADDRESS,
  UPDATE_ADDRESS_TYPE,
  UPDATE_LAT_LNG} from '../actions/location_actions';

const initState = {
    title: "",
    eventType: "Type",
    category: "Category",
    tags: [],
    organizer: "",
    startDate: new Date(),
    endDate: new Date(),
    submitted: false,
    address: "",
    addressType: "Venue",
    displayStartTime: true,
    displayEndTime: true,
    singleEvent: "single",
    description: "",
    imageFile: null
}
const eventReducer = (state = initState, action) => {
    switch (action.type) {
      case UPDATE_TITLE:
        return { ...state, title: action.title };
      case UPDATE_TYPE:
        return { ...state, eventType: action.eventType };
      case UPDATE_CATEGORY:
        return { ...state, category: action.category };
      case ADD_TAG:
        return { ...state, tags: state.tags.concat(action.tag) };
      case UPDATE_ADDRESS_TYPE:
        return { ...state, addressType: action.addressType };
      case UPDATE_ADDRESS:
        return { ...state, address: action.address };
      case UPDATE_LAT_LNG:
        return { ...state, lat: action.latLng.lat, lng: action.latLng.lng };
      case UPDATE_DISPLAY_START_TIME:
        return { ...state, displayStartTime: action.val }
      case UPDATE_DESCRIPTION:
        return { ...state, description: action.description }
      case UPDATE_DISPLAY_END_TIME:
        return {...state, displayEndTime: action.val }
      case UPDATE_SINGLE_EVENT:
        return { ...state, singleEvent: action.val }
      case UPDATE_IMAGE_FILE:
        return Object.assign({}, state, {imageFile: action.file})
      case RECEIVE_EVENT:
        const { event } = action;
        return {
          title: event.title,
          id: event.id,
          userId: event.user_id,
          category: event.category,
          eventType: event.eventType,
          organizer: event.organizer,
          startDate: new Date(event.start_time),
          endDate: new Date(event.end_time),
          address: event.location_address,
          addressType: event.location_type,
          lat: event.lat,
          lng: event.lon,
          displayStartTime: event.display_start_time,
          displayEndTime: event.display_end_time,
          status: event.draft,
          description: event.description === null ? "" : event.description,
          imageFile: !event.imageFile ? null : event.imageFile,
          imageUrl: !event.imageUrl ? "" : event.imageUrl,
        tags: event.tags,}
      case REMOVE_TAG:
        const updatedTags = state.tags.filter(
          tag => tag.toLowerCase() !== tag.toLowerCase()
        );
        return {
          ...state,
          tags: updatedTags
        };
      case FORM_SUBMITTED:
        return {...state, submitted: action.submitted };
      case UPDATE_ORGANIZER:
        return { ...state, organizer: action.organizer };
      case UPDATE_START_DATE:
        return { ...state, startDate: action.startDate };
      case UPDATE_END_DATE:
        return { ...state, startDate: action.endDate };

      default:
        return state;
    }
}

export default eventReducer;
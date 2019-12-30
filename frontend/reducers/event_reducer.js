import {
  UPDATE_TITLE,
  UPDATE_TYPE,
  UPDATE_CATEGORY,
  ADD_TAG,
  REMOVE_TAG,
  UPDATE_ORGANIZER,
  UPDATE_END_DATE,
  UPDATE_START_DATE,
  FORM_SUBMITTED
} from "../actions/event_actions";

const initState = {
    title: "",
    eventType: "Type",
    category: "Category",
    tags: [],
    organizer: "",
    startDate: new Date(),
    endDate: new Date(),
    submitted: false
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
      case REMOVE_TAG:
        const updatedTags = state.tags.filter(
          tag => tag.toLowerCase() !== tag.toLowerCase()
        );
      case FORM_SUBMITTED:
        return {...state, submitted: action.submitted }
        return {
          ...state,
          tags: updatedTags
        };
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
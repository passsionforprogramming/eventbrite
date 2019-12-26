import { UPDATE_TITLE, 
    UPDATE_TYPE, 
    UPDATE_CATEGORY, 
    ADD_TAG,
    REMOVE_TAG,
    UPDATE_ORGANIZER
} from '../actions/event_actions';

const initState = {
    title: "",
    eventType: "Type",
    category: "Category",
    tags: [],
    organizer: ""
}
const eventReducer = (state = initState, action) => {
    switch (action.type) {
        case UPDATE_TITLE:
            return {...state, title: action.title};
        case UPDATE_TYPE:
            return { ...state, eventType: action.eventType};
        case UPDATE_CATEGORY:
            return { ...state, category: action.category };
        case ADD_TAG:
            return { ...state, tag: state.tags.concat(action.tag) };
        case REMOVE_TAG:
            const updatedTags = state.tags.filter(tag => tag.toLowerCase() !== tag.toLowerCase());
            return {
                ...state, tags: updatedTags
            };
        case UPDATE_ORGANIZER:
            return { ...state, organizer: action.organizer };
        
        default:
            return state;
    }
}

export default eventReducer;
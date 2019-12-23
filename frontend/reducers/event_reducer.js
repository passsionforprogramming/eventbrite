const state = {
    title: "",
    eventType: "",
    category: "",
    tags: [],
    organizer: ""
}
const eventReducer = (state = initState, action) => {
    switch (action.type) {
        case UPDATE_TITLE:
            return {...state, ...action.title};
        case UPDATE_TYPE:
            return { ...state, ...action.eventType };
        case UPDATE_CATEGORY:
            return { ...state, ...action.category };
        case ADD_TAG:
            return { ...state, tag: state.tags.concat(action.tag) };
        case REMOVE_TAG:
            const updatedTags = state.tags.filter(tag => tag.toLowerCase() !== tag.toLowerCase());
            return {
                ...state, tags: updatedTags
            };
        case UPDATE_ORGANIZER:
            return { ...state, ...action.organizer };
        
        default:
            return state;
    }
}
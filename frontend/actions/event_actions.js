export const UPDATE_TITLE = "UPDATE_TITLE";
export const UPDATE_TYPE = "UPDATE_TYPE";
export const UPDATE_CATEGORY = "UPDATE_CATEGORY";
export const ADD_TAG = "ADD_TAG";
export const REMOVE_TAG = "REMOVE_TAG";
export const UPDATE_ORGANIZER = "UPDATE_ORGANIZER";

export const updateTitle = title => ({
    type: UPDATE_TITLE,
    title
});

export const updateType = eventType => ({
    type: UPDATE_TYPE,
    eventType
});

export const updateCategory = category => ({
    type: UPDATE_TITLE,
    category
});

export const addTag = tag => ({
    type: ADD_TAG, 
    tag
});

export const removeTag = tag => ({
    type: REMOVE_TAG,
    tag
})

export const updateOrganizer = organizer => ({
    type: UPDATE_ORGANIZER,
    organizer
})
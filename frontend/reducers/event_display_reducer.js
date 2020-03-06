import { DISPLAY_EVENT } from '../actions/event_actions';
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
const eventDisplayReducer = (state = initState, action) => {
    switch(action.type){
        case DISPLAY_EVENT:
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
                tags: event.tags,
                hasBatches: event.has_batches
            }
        default:
            return state;
    }
}

export default eventDisplayReducer;
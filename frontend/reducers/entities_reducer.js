import { combineReducers } from "redux";
import usersReducer from './users_reducer';
import previousUserReducer from "./previous_user_reducer";
import eventReducer from './event_reducer';
import currentTicketReducer from './current_ticket_reducer';
import TotalEventsReducer from "./total_events_reducer";
import LikedEventsReducer from "./liked_events_reducer";
const entitiesReducer = combineReducers({
    users: usersReducer,
    previousUser: previousUserReducer,
    event: eventReducer,
    currentTicket: currentTicketReducer,
    totalEvents: TotalEventsReducer,
    likedEvents: LikedEventsReducer
});

export default entitiesReducer;
import { combineReducers } from "redux";
import usersReducer from './users_reducer';
import previousUserReducer from "./previous_user_reducer";
import eventReducer from './event_reducer';
import currentTicketReducer from './current_ticket_reducer';
import TotalEventsReducer from "./total_events_reducer";
import LikedEventsReducer from "./liked_events_reducer";
import eventDisplayReducer from './event_display_reducer';
import BatchReducer from './batch_reducer';
import SearchReducer from "./search_reducer";
import UsersEventsReducer from './users_events_reducer';
import UserTicketsReducer from './users_tickets_reducer';
const entitiesReducer = combineReducers({
    users: usersReducer,
    previousUser: previousUserReducer,
    event: eventReducer,
    displayEvent: eventDisplayReducer,
    currentTicket: currentTicketReducer,
    totalEvents: TotalEventsReducer,
    likedEvents: LikedEventsReducer,
    search: SearchReducer,
    batch: BatchReducer,
    userEvents: UsersEventsReducer,
    userTickets: UserTicketsReducer
});

export default entitiesReducer;
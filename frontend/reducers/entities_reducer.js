import { combineReducers } from "redux";
import usersReducer from './users_reducer';
import previousUserReducer from "./previous_user_reducer";
import eventReducer from './event_reducer';
const entitiesReducer = combineReducers({
    users: usersReducer,
    previousUser: previousUserReducer,
    event: eventReducer,
});

export default entitiesReducer;
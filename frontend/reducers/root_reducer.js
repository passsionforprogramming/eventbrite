import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';
import sessionReducer from "./session_reducer";
import errors_reducer from './errors_reducer';

const RootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    errors: errors_reducer
});

export default RootReducer;


import { combineReducers } from "redux";
import loadingReducer from './loading_reducer';

const UiReducer = combineReducers({
    loading: loadingReducer
})

export default UiReducer;
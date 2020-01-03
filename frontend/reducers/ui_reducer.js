import { combineReducers } from "redux";
import loadingReducer from './loading_reducer';
import HomeUiReducer from './home_ui_reducer';
import DetailsUiReducer from './details_ui_reducer';
const UiReducer = combineReducers({
    loading: loadingReducer,
    homeUi: HomeUiReducer,
    detailsUi: DetailsUiReducer
})

export default UiReducer;
import { DATE_DROPDOWN_EVENT, HIDE_ARROW_EVENT, ARROW_SEARCH_CLICKED } from "../actions/ui_actions";
const initState = {
    dateDropDown: false,
    hideArrow: false,
    arrowClicked: false
}

const UiReducer = (state = initState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case DATE_DROPDOWN_EVENT:
            return {...state, ...action.event}
        case HIDE_ARROW_EVENT:
            return {...state, hideArrow: action.event}
        case ARROW_SEARCH_CLICKED:
            return {...state, arrowClicked: action.event}
        default:
            return state;
    }
}
export default UiReducer;
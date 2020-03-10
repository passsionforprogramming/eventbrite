import { DATE_DROPDOWN_EVENT, HIDE_ARROW_EVENT } from "../actions/ui_actions";
const initState = {
    dateDropDown: false,
    hideArrow: false
}

const UiReducer = (state = initState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case DATE_DROPDOWN_EVENT:
            return {...state, ...action.event}
        case HIDE_ARROW_EVENT:
            return {...state, hideArrow: action.event}
        default:
            return state;
    }
}
export default UiReducer;
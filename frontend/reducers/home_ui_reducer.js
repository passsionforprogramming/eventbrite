import { DATE_DROPDOWN_EVENT } from "../actions/ui_actions";
const initState = {
    dateDropDown: false
}

const UiReducer = (state = initState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case DATE_DROPDOWN_EVENT:
            return {...state, ...action.event}
        default:
            return state;
    }
}
export default UiReducer;
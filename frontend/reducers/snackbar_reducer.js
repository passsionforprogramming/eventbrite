import { FIRE_SNACKBAR, CEASE_SNACKBAR } from '../actions/snackbar_actions';
const initState = {
    show: false,
    message: ""
}

const SnackBarReducer = (state=initState, action) => {
    switch (action.type) {
        case FIRE_SNACKBAR:
            return {...state, show: true, message: action.message}
        case CEASE_SNACKBAR:
            return {...state, show: false}
        default:
            return state;
    }
}

export default SnackBarReducer;
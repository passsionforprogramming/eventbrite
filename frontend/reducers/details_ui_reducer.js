import { RECEIVE_PREVIEW_URL } from '../actions/ui_actions';

const DetailsUiReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PREVIEW_URL:
            return {...state, previewUrl: action.url}
        default:
           return state;
    }
}

export default DetailsUiReducer;
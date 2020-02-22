import { RECEIVE_BATCH, RECEIVE_BATCHES  } from '../actions/ticket_actions';

const initState = {
    batches: [],
    currentBatch: null
};

const BatchReducer = (state = initState, action) => {
    switch (action.type) {
        case RECEIVE_BATCH: 
        return {...state, currentBatch: action.batch};
        case RECEIVE_BATCHES:
            return {...state, batches: action.batches}
        default:
            return state;
    }
}

export default BatchReducer;
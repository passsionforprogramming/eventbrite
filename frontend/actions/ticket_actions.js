import * as APIUtil from '../util/ticket_api_util';
export const UPDATE_NAME = "UPDATE_NAME";
export const UPDATE_QUANTITY = "UPDATE_QUANTITY";
export const UPDATE_PRICE = "UPDATE_PRICE";
export const UPDATE_TICKET_END_DATE = "UPDATE_TICKET_END_DATE";
export const UPDATE_TICKET_START_DATE = "UPDATE_TICKET_START_DATE";
export const RECEIVE_BATCH = "RECEIVE_BATCH";
export const RECEIVE_BATCHES = "RECEIVE_BATCHES";
export const EDIT_BATCH = "EDIT_BATCH";
export const RESET_CURRENT_TICKET = "RESET_CURRENT_TICKET";

export const updateName = name => ({
    type: UPDATE_NAME,
    name
});

export const resetCurrentTicket = () => ({
    type: RESET_CURRENT_TICKET
})

export const editBatch = (idx, batches) => {
    const batch = batches[idx];
    return {
        type: EDIT_BATCH,
        batch
    }
}


export const updateQuantity = quantity => ({
    type: UPDATE_QUANTITY,
    quantity
});

export const updatePrice = price => ({
    type: UPDATE_PRICE,
    price
})

export const updateStartDate = startDate => ({
    type: UPDATE_TICKET_START_DATE,
    startDate
});

export const updateEndDate = endDate => ({
    type: UPDATE_TICKET_END_DATE,
    endDate
});

export const receiveBatch = batch => ({
    type: RECEIVE_BATCH,
    batch
});

export const receiveBatches = batches => ({
    type: RECEIVE_BATCHES,
    batches
});

export const createTicket = ticket => dispatch => {
    return APIUtil.createTicketBatch(ticket).then(batches => (
        dispatch(receiveBatches(batches))
    ))

};

export const updateTicket = (ticket, id) => dispatch => (
    APIUtil.updateBatch(ticket, id).then(batches => (
        dispatch(receiveBatches(batches))
    ))
);

export const fetchBatches = eventId => dispatch => (
    APIUtil.fetchBatches(eventId).then(batches => dispatch(receiveBatches(batches)))
);

export const fetchBatch = batchId => dispatch => (
    APIUtil.fetchBatch(batchId).then(batch => dispatch(receiveBatch(batch)))
);

export const deleteBatch = batchId => dispatch => (
    APIUtil.deleteBatch(batchId).then(batches => dispatch(receiveBatches(batches)))
);
    
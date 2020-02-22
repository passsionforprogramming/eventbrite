import * as APIUtil from '../util/ticket_api_util';
export const UPDATE_NAME = "UPDATE_NAME";
export const UPDATE_QUANTITY = "UPDATE_QUANTITY";
export const UPDATE_PRICE = "UPDATE_PRICE";
export const UPDATE_TICKET_END_DATE = "UPDATE_TICKET_END_DATE";
export const UPDATE_TICKET_START_DATE = "UPDATE_TICKET_START_DATE";
export const RECEIVE_BATCH = "RECEIVE_BATCH";
export const RECEIVE_BATCHES = "RECEIVE_BATCHES";

export const updateName = name => ({
    type: UPDATE_NAME,
    name
});

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
    return APIUtil.createTicketBatch(ticket).then(batch => (
        dispatch(receiveBatch(batch))
    ))

}

export const fetchBatches = () => dispatch => (
    APIUtil.fetchBatches().then(batches => dispatch(receiveBatches(batches)))
)

export const fetchBatch = batchId => dispatch => (
    APIUtil.fetchBatch(batchId).then(batch => dispatch(receiveBatch(batch)))
)
    
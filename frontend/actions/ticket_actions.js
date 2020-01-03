export const UPDATE_NAME = "UPDATE_NAME";
export const UPDATE_QUANTITY = "UPDATE_QUANTITY";
export const UPDATE_PRICE = "UPDATE_PRICE";
export const UPDATE_TICKET_END_DATE = "UPDATE_TICKET_END_DATE";
export const UPDATE_TICKET_START_DATE = "UPDATE_TICKET_START_DATE";

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
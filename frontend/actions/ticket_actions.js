export const UPDATE_NAME = "UPDATE_NAME";
export const UPDATE_QUANTITY = "UPDATE_QUANTITY";

export const updateName = name => ({
    type: UPDATE_NAME,
    name
});

export const updateQuantity = quantity => ({
    type: UPDATE_QUANTITY,
    quantity
});
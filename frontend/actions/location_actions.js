export const UPDATE_ADDRESS = "UPDATE_ADDRESS";
export const UPDATE_ADDRESS_TYPE = "UPDATE_ADDRESS_TYPE";
export const UPDATE_LAT_LNG = "UPDATE_LAT_LNG";

export const updateAddress = address => ({
    type: UPDATE_ADDRESS,
    address
});

export const updateAddressType = addressType => ({
    type: UPDATE_ADDRESS_TYPE,
    addressType
});

export const updateLatLng = latLng => ({
    type: UPDATE_LAT_LNG,
   latLng
});




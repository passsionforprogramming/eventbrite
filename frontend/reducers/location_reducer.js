import { UPDATE_ADDRESS, UPDATE_ADDRESS_TYPE, UPDATE_LAT_LNG } from '../actions/location_actions';
const initState = {
    address: "",
    addressType: "Venue"
}

const locationReducer = (state = initState, action) => {
    switch (action.type) {
        case UPDATE_ADDRESS_TYPE:
            return {...state, addressType: action.addressType};
        case UPDATE_ADDRESS:
            return { ...state, address: action.address };
        case UPDATE_LAT_LNG:
            return { ...state, lat: action.latLng.lat, lng: action.latLng.lng };
        default:
            return state;
    }
}

export default locationReducer;
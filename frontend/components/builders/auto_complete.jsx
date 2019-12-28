import React from 'react';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';

export default class GooglePlacesAutoComplete extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <PlacesAutocomplete />
        )
    }
}
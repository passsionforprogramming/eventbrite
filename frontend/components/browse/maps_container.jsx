import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import React from 'react';
class MapContainer extends React.Component {
    render(){
        return (
          <Map
            google={this.props.google}
            style={{ width: "100%", height: "100%", position: "relative" }}
            zoom={13}
            initialCenter={{ lat: 32.8203525, lng: -97.011731 }}
          />
        );
    }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCxttV9psL_aLqCT0VMPFXbntgt1qNTaTQ"
})(MapContainer);

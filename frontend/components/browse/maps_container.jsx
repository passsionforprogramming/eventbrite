import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import React from 'react';
class MapContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showingInfoWindow: false,  //Hides or the shows the infoWindow
      activeMarker: {},          //Shows the active marker upon click
      selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
    };
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
    render(){
      const markers = this.props.events.map(event => (
        <Marker 
        title={event.title}
        position={{lat: event.lat, lng: event.lon}} />
      ));
        return (
          <Map
            google={this.props.google}
            style={{ width: "100%", height: "100%", position: "relative" }}
            zoom={13}
            initialCenter={{ lat: 32.8203525, lng: -97.011731 }}
          > 
          <Marker 
          onClick={this.onMarkerClick}
          name={"Dallas"} 
          position={{ lat: 32.8203525, lng: -97.011731 }}/>
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
              onClose={this.onClose}
            >
              <div>
                <h4>{this.state.selectedPlace.name}</h4>
              </div>
            </InfoWindow>
          </Map>
        );
    }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCxttV9psL_aLqCT0VMPFXbntgt1qNTaTQ"
})(MapContainer);

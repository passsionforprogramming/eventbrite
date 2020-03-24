/* global google:false */

class MarkerManager {
  constructor(map, handleClick){
    this.map = map;
    this.handleClick = handleClick;
    this.markers = {};
  }

  updateMarkers(events){
    const eventsObj = {};
    events.forEach(event => eventsObj[event.id] = event);

    events
      .forEach(newEvent => this.createMarkerFromEvent(newEvent, this.handleClick))
  }


  createMarkerFromEvent(event) {
    //const position = new google.maps.LatLng(event.lat, event.lon);
    const marker = new google.maps.Marker({
      position: {
        lat: event.lat,
        lng: event.lon
      },
      map: this.map,
      title: event.title,
      eventId: event.id
    });

    marker.addListener('click', () => this.handleClick(event));
    this.markers[marker.eventId] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.eventId].setMap(null);
    delete this.markers[marker.eventId];
  }
}

export default MarkerManager;

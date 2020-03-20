import React from 'react';
import MarkerManager from '../../util/marker_manager';
export default class EventMap extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    handleMarkerClick = () => {
        this.props.history.push(`event/${event.id}`)
    }

    registerListeners() {
        google.maps.event.addListener(this.map, 'click', (event) => {
            const coords = getCoordsObj(event.latLng);
            this.handleClick(coords);
        });
    }
    componentDidMount(){
        const mapOptions = {
            center: {
                lat: this.props.match.params.lat,
                lng: this.props.atch.params.lon
            },
            zoom: 13
            }
        const map = this.refs.map;
        this.map = new google.maps.Map(map, mapOptions);
        this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick);
        this.registerListeners();
        this.MarkerManager.updateMarkers(this.props.events);
    }
    render(){
        return (
            <div className="map" ref="map">

            </div>
        )
    }
}
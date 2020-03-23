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
                lat: parseFloat(this.props.match.params.lat),
                lng: parseFloat(this.props.match.params.lon)
            },
            zoom: 10
        }
        const map = this.refs.map;
        this.map = new google.maps.Map(map, mapOptions);
        this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick);
        this.registerListeners();
    }
    
    render(){
        
        if (this.props.events.length > 0) {
            this.MarkerManager.updateMarkers(this.props.events);
        }
        return (
            <div className="map" style={{width: "100%", height: "100vh"}} ref="map">

            </div>
        )
    }
}
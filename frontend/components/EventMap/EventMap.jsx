import React from 'react';

class EventMap extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            mapOptions: {
                center: {
                    lat: this.props.match.params.lat,
                    lng: this.props.atch.params.lon
                },
                zoom: 13
            }
        }
    }
    render(){
        return (
            <div className="map" ref="map">

            </div>
        )
    }
}
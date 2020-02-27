import React from 'react';

const EventListItem = props => {
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    const thumbDate = new Date(props.eventTime);
    return (
        <div className="event-list-item">
            <img className="event-img-list" src={props.imageUrl}/>
            <div className="detail-col">
                <p className="detail-title">{props.title}</p>
                <p className="detail-date">{thumbDate.toLocaleDateString('en-US', options)}</p>
                <p className="detail-location">{props.address}</p>
            </div>
        </div>
    )
}

export default EventListItem;
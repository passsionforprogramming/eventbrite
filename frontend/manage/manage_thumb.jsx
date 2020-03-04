import React from 'react';

const ManageThumb = props => {
    const eventTime = new Date(props.eventTime);
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric'};
    const monthOptions = { month: 'short'};
    const dayOptions = { day: 'numeric'};
    return (
        <div className="manage-thumb">
            <div className="cal-col">
                <p>{eventTime.toLocaleDateString('en-US', monthOptions)}</p>
                <p>{eventTime.toLocaleDateString('en-US', dayOptions)}</p>
            </div>
            <img className="manage-thumb-img" src={props.imageUrl} alt="event-image"/>
            <div className="manag-thumb-details-col">
                <p className="manage-thumb-event-title">{props.title}</p>
                <p className="manage-thumb-location">{props.address}</p>
            </div>
            <p className="sold">
                {`${props.sold}/${props.tickets}`}
            </p>
            <p className="sold">
                {props.gross}
            </p>
            <p className="sold">
                {props.status}
            </p>

        </div>
    )
};

export default ManageThumb;
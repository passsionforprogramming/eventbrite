import React from 'react';
import PlaceHolder from '../../../manage/placeholder.png'
const UserTicketListItem = props => {
    const eventTime = new Date(props.eventTime);
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    const monthOptions = {month: 'short'};
    const dayOptions = {day: 'numeric'};
    return (
        <div className="user-ticket-list-item">
            <div className="ticket-date-col">
                <p className="month-col">{eventTime.toLocaleDateString('en-US', monthOptions)}</p>
                <p className="day-col">{eventTime.toLocaleDateString('en-US', dayOptions)}</p>
            </div>
            <img src={props.imageUrl ? props.imageUrl : PlaceHolder} className="ticket-thumb-img"/>
            <div className="name-date-col">
                <p className="tickets-header">{props.eventName}</p>
                <p className="sold">{eventTime.toLocaleDateString('en-US', options)}</p>
            </div>
        </div>
    );
}

export default UserTicketListItem;
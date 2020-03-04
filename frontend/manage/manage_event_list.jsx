import React from 'react';
import ManageThumb from './manage_thumb';
const ManageEventList = props => {
    const { events } = props;
    return (
        <div className="manage-event-list">
            {
                events.map(event => (
                    <ManageThumb 
                    imageUrl={event.image_url}
                    title={event.title}
                    address={event.location_address}
                    gross={event.gross}
                    sold={event.sold}
                    status={event.status}
                    tickets={event.total_tickets}
                    eventTime={event.eventTime}
                    />
                ))
            }
        </div>
    )
}

export default ManageEventList;
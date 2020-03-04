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
                    address={event.address}
                    gross={event.gross}
                    sold={event.sold}
                    status={event.status}
                    tickets={event.total_tickets}
                    id={event.id}
                    eventTime={event.eventTime}
                    key={event.id}
                    />
                ))
            }
        </div>
    )
}

export default ManageEventList;
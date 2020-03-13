import React from 'react';
import EventListItem from '../search_bar/event_list_item';
const EventList = props => {
    return (
        <div className="event-list-of-list-items">
            {
                props.events.map(event => (
                    <EventListItem
                        title={event.title}
                        id={event.id}
                        key={event.id}
                        eventTime={event.startDate}
                        imageUrl={event.imageUrl}
                        address={event.address}
                    />
                ))
            }
        </div>
    )
}

export default EventList;
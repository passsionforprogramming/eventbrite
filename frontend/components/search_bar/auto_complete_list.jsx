import React from 'react'
import EventListItem from './event_list_item';

const AutoCompleteList = props => {
    const { events } = props;
    return (
        <div className="auto-complete-list">
            <p className="evt-search-header">Events</p>
            {
                events.map(event => (
                    <EventListItem 
                    title={event.title}
                    id={event.id}
                    key={event.id}
                    eventTime={event.startDate}
                    imageUrl={event.imageUrl}
                    address={event.address}/>
                ))
            }
        </div>
    )
}

export default AutoCompleteList;

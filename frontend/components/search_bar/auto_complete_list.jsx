import React from 'react'
import EventListItem from './event_list_item';

const AutoCompleteList = props => {
    const { events } = props;
    return (
        <div className="auto-complete-list">
            {
                events.map(event => (
                    <EventListItem 
                    title={event.title}
                    eventTime={event.startDate}
                    imageUrl={event.imageUrl}
                    address={event.address}/>
                ))
            }
        </div>
    )
}

export default AutoCompleteList;

import React from 'react'
import UserTicketListItem from '../users_tickets/user_ticket_list_item';
const UserTicketList = props => {
    const { tickets } = props;
    return (
        <div className="user-ticket-list">
            {
                tickets.map(ticket => <UserTicketListItem 
                eventName={ticket.event_name}
                eventTime={ticket.eventStart}
                imageUrl={ticket.imageUrl}
                key={ticket.id}
                id={ticket.id}
                userName={ticket.userName}/>)
            }
        </div>
    )
}

export default UserTicketList;
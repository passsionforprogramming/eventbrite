json.array! @users_tickets do |ticket|
    json.id ticket.id
    json.name ticket.name
    json.description ticket.description
    json.batch_id ticket.batch_id
    json.ticket_code ticket.ticket_code
    json.price ticket.price
    json.event_id ticket.event_id
    json.owner_id ticket.owner_id
    json.event_name ticket.event.title
    json.event_id ticket.event.id
    json.eventStart ticket.event.start_time
    json.imageUrl ticket.event.photo.attached? ? url_for(ticket.event.photo) : nil
    json.userName ticket.owner.first_name
end

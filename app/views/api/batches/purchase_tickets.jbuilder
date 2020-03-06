json.array! @users_tickets do |ticket|
    json.id ticket.id
    json.name ticket.name
    json.description ticket.description
    json.batch_id ticket.batch_id
    json.ticket_code ticket.ticket.code
    json.price ticket.price
    json.event_id ticket.event_id
    json.owner_id ticket.owner_id
end
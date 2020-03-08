json.array! @tickets do |ticket|
    json.id ticket.id
    json.owner_id ticket.owner_id
    json.description ticket.description
    json.price ticket.price
    json.event do
        json.event_name ticket.event.title 
        json.imageUrl ticket.event.image_url
        json.eventStart ticket.event.start_time
    end
end
json.array! @events do |event|
    json.id event.id
    json.eventTime event.start_time
    json.title event.title
    json.address event.location_address
    json.sold event.sold
    json.total_tickets event.total_tickets
    json.gross event.gross
    json.status event.status
    if event.photo.attached?
        json.imageUrl url_for(event.photo)
    end
end
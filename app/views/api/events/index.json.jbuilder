json.array! @events do |event|
    json.id event.id
    json.eventTime event.start_time
    json.title event.title
    json.address event.location_address
    json.status event.status
    if event.photo.attached?
        json.imageUrl url_for(event.photo)
    end
end
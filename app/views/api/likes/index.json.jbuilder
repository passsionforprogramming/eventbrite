json.array! @events do |event|
    json.id event.id
    json.imageUrl url_for(event.photo)
    json.eventTime event.start_time
    json.title event.title
    json.address event.location_address
end
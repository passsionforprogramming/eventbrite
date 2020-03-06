json.merge! event.attributes 
json.tags tags
if local_assigns[:has_batches]
    json.has_batches has_batches
end
if event.photo.attached?
json.imageUrl url_for(event.photo)
end
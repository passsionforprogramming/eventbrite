json.merge! event.attributes 
json.tags tags
if event.photo.attached?
json.imageUrl url_for(event.photo)
end
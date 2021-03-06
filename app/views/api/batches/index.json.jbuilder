json.array! @batches do |batch|
    json.sale_start_time batch.sale_start_time
    json.sale_end_time batch.sale_end_time
    json.quantity batch.quantity
    json.price batch.price
    json.id batch.id
    json.tickets_sold batch.tickets_sold
    json.name batch.name
    json.tickets_available batch.quantity - (batch.tickets_sold.nil? ? 0 : batch.tickets_sold)
end
export const createTicketBatch = batch => (
    $.ajax({
        method: 'POST',
        data: { batch },
        url: `api/batches`
    })
);

export const fetchBatches = (eventId) => (
    $.ajax({
        method: 'GET',
        url: `api/batches?event=${eventId}`
    })
);

export const fetchBatch = batchId => (
    $.ajax({
        method: "GET",
        url: `api/batches/${batchId}`
    })
);

export const updateBatch = (batch, id) => (
    $.ajax({
        method: "PATCH",
        url: `api/batches/${id}`,
        data: { batch }
    })
);

export const deleteBatch = batchId => (
    $.ajax({
        method: "DELETE",
        url: `api/batches/${batchId}`
    })
)
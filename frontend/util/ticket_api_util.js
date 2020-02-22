export const createTicketBatch = batch => (
    $.ajax({
        method: 'POST',
        data: { batch },
        url: `api/batches`
    })
);

export const fetchBatches = () => (
    $.ajax({
        method: 'GET',
        url: `api/batches`
    })
);

export const fetchBatch = batchId => (
    $.ajax({
        method: "GET",
        url: `api/batches/${batchId}`
    })
);

export const updateBatch = batch => (
    $.ajax({
        method: "PATCH",
        url: `api/batches/${batch.id}`,
        data: { batch }
    })
);

export const deleteBatch = batchId => (
    $.ajax({
        method: "DELETE",
        url: `api/batches/${batchId}`
    })
)
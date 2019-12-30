export const submitEvent = event => (
    $.ajax({
        method: 'POST',
        data: { event },
        url: `api/events`
    })
);
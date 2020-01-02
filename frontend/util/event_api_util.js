export const fetchEvents = () => (
    $.ajax({
        url: `api/events`
    })
)

export const fetchEvent = (eventId) => (
    $.ajax({
        url: `api/events/${eventId}`
    })
)

export const createEvent = event => (
    $.ajax({
        method: 'POST',
        data: { event },
        url: `api/events`
    })
)

export const updateEvent = (event) => (
    $.ajax({
        data: { event },
        method: 'PATCH',
        url: `api/events/${event.id}`
    })
)

export const deleteEvent = (eventId) => (
    $.ajax({
        method: 'DELETE',
        url: `api/events/${eventId}`
    })
)

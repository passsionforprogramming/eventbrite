export const fetchLikes = () => (
    $.ajax({
        url: `api/likes`
    })
)

export const fetchLike = (likeId) => (
    $.ajax({
        url: `api/likes/${likeId}`
    })
)

export const createLike = like => (
    $.ajax({
        method: 'POST',
        data: { like },
        url: `api/likes`
    })
)

export const updateLike = (like) => (
    $.ajax({
        data: { like },
        method: 'PATCH',
        url: `api/likes/${like.id}`
    })
)

export const deleteLike = (likeId) => (
    $.ajax({
        method: 'DELETE',
        url: `api/likes/${likeId}`
    })
)

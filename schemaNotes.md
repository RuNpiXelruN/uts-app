# Uts App Schema Playbook

### Users

    /users
        uid
            info
                uid
                name
                avatar
                timestamp

### Visualisations

    /visuals
        visualId
            info
                uid
                visualId
                title
                type
                data
                timestamp

### usersVisuals

    /usersVisuals
        uid
            visualId
            uid
            title
            type
            data
            timestamp                


### LikeCount ?

    /likeCount
        visualId
            0

### usersLikes ?

    /usersLikes
        uid
            visualId: true

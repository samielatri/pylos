import { Schema } from 'mongoose';

// userRegosterSchema
const userRegisterSchema = new Schema({
    // request id
    request_id: {
        type: String,
    },
    // user_id (person who done the request)
    user_id: {
        type: String,
    },
    // otherUser_id (person who receives the request)
    otherUser_id: {
        type: String,
    },
    // type of request
    request_type: {
        type: String,
    },
    // status
    status: {
        type: String,
    },
    // date of creation
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mogoose.model('friend_request', userRegisterSchema)

const mongoose = require('mongoose');

const userSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: Number,
        //accepts 10 numbers max
        max: 10,
        default: null
    },
    picture: {
        type: String,
        default: null
    },
    role: {
        type: String,
        required: true,
        //enum: takes a list of allowed values
        // enum: ['admin', 'user'],
        default: "admin"
    },
    vehicules: {
        type: [],
        default: null
    },
    interactions: {
        timestamps: true,

        createdBy: {
            type: Schema.Types.ObjectId,
            ref: 'user',
            default: null
        },
        updatedBy: {
            type: Schema.Types.ObjectId,
            ref: 'user',
            default: null
        },
        deletedAt: {
            type: Date,
            default: null
        },
        deletedBy: {
            type: Schema.Types.ObjectId,
            ref: 'user',
            default: null
        }
    }
});

const user = mongoose.model('user', userSchema, 'users');

module.exports = {
    user
};
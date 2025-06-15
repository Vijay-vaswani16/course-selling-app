const mongoose = require('mongoose');
const objectId = mongoose.Schema


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: String
    },
    courseId: {
        type: objectId
    }
});

const user = mongoose.model('users', userSchema);
module.exports = user;
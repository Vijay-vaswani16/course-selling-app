const mongoose = require('mongoose');
const objectId = mongoose.Schema.ObjectId;

const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }, 
    course: {
        type: objectId,
    }
});

const admin = new mongoose.model('admin', adminSchema);
module.exports = admin;
const mongoose = require('mongoose');
const Institution = require('./Institution');
const User = require('./User');

const institutionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: ['museum', 'archive', 'library', 'gallery'],
        required: true,
    },
    description: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Institution = mongoose.model('Institution', institutionSchema);

module.exports = {
    Institution,
    User,
};
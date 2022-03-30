const mongoose = require('mongoose');

const fakultetSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        require: true
    },
    univerzitet: {
       ref: 'univerzitet',
       type: mongoose.Types.ObjectId
    }
}, { timestamps: true });

module.exports = mongoose.model('fakultet', fakultetSchema);
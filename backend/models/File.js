const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    fileoriginal: {
        type: String,
        trim: true,
        required: 'Add file'
    },
    filealias: {
        type: String,
        trim: true,
    }
});

module.exports = mongoose.model('File', fileSchema);
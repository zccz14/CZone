var mongoose = require('mongoose');
var Schema = mongoose.Schema;
module.exports = mongoose.model('post', new Schema({
    title: {
        type: String,
        required: 'miss title',
    },
    content: {
        type: String,
        required: 'miss content',
    },
}));
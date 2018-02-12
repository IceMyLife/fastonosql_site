// load the things we need
var mongoose = require('mongoose');

var OperationSystemSchema = mongoose.Schema({
    name: String,
    version: String,
    arch: String
});

// create the model for users and expose it to our app
module.exports = mongoose.model('OperationSystem', OperationSystemSchema);



// load the things we need
var mongoose = require('mongoose');

// os: { name: 'Windows NT', version: '10.0', arch: 'x86_64' },
// project: { name: 'FastoNoSQL', version: '1.16.2.0', arch: 'x86_64', owner: '123',  exec_count: 187 }

var OperationSystemSchema = mongoose.Schema({
    name: String,
    version: String,
    arch: String
});

var ProjectSchema = mongoose.Schema({
    name: String,
    version: String,
    arch: String,
    owner: String,
    exec_count: Number
});

// define the schema for our programme model
var StatisticSchema = mongoose.Schema({
    created_date: {type: Date, default: Date.now},
    os: OperationSystemSchema,
    project: ProjectSchema
});

// create the model for users and expose it to our app
module.exports = StatisticSchema;



'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = new Schema({
    name: {
        type: String,
        required: 'Kindly enter the name of the project'
    },
    score: {
        type: Number,
        default: 0
    },
    language: {
        type: String,
        default: "Other"
    },
    difficulty: {
        type: Number,
        default: 0
    },
    level: {
        type: Number,
        default: 1
    },
    versionKey: false
});

module.exports = mongoose.model('Project', ProjectSchema);

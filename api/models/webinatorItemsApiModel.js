'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ItemSchema = new Schema({
    name: {
        type: String,
        required: "Please enter the name of an item"
    },
    price: {
        type: Number,
        default: 0
    },
    bonus:  {
        type: {},
        default: {}
    },
    versionKey: false
});

module.exports = mongoose.model('Item', ItemSchema);
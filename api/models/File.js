'use strict';

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var FileSchema = new Schema({
    name: {
        type: String,
        default: "hostname"
    },
    size: {
        type: Number,
        default: 0,
    },
    type: {
        type: String,
        default: ""
    },
    part1: {
        type: [ObjectId],
      default:[]
    },
    part2: {
        type: [ObjectId],
        default:[]
    }
});

module.exports = mongoose.model("File", FileSchema);
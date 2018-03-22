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
  uid: {
    type: String,
    default: "",
    unique: true
  },
  partOne: {
    type: [{type: Schema.Types.ObjectId, ref: "Daemon"}],
    default:[]
  },
  partTwo: {
    type: [{type: Schema.Types.ObjectId, ref: "Daemon"}],
    default:[]
  }
});

module.exports = mongoose.model("File", FileSchema);
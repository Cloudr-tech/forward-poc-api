'use strict';
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var DaemonSchema = new Schema({
  hostname: {
    type: String,
    default: "hostname"
  },
  ip: {
    type: String,
    default: "0.0.0.0",
    unique:true
  },
  storageLeft: {
    type: Number,
    default: 0
  },
  timeStamp: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("Daemon", DaemonSchema);
// var ID = -1;
//
// class Daemon {
//   constructor() {
//     this.id = ++ID;
//   };
//   set name(name) {
//     this.name = name;
//   };
//   get name() {
//     return (this.name)
//   }
//   set id(id) {
//     this.id = id;
//   }
//   get id() {
//     return this.id;
//   }
// }
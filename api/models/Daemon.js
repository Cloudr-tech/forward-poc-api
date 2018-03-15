'use strict';
var mongoose = require("mongoose");
var schema = mongoose.Schema;

var DaemonSchema = new schema({
  name: {
    type : String,
    required: "name"
  }
});

var ID = -1;

class Daemon {
  constructor() {
    this.id = ++ID;
  };
  set name(name) {
    this.name = name;
  };
  get name() {
    return (this.name)
  }
  set id(id) {
    this.id = id;
  }
  get id() {
    return this.id;
  }
}
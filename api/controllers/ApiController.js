'use strict';

var mongoose = require('mongoose');
var Daemon = mongoose.model('Daemon');

exports.listFiles = function (req, res) {
  res.json({func: 'listFiles'});
};

exports.putFile = function (req, res) {
  res.json({func: 'putFiles'});
};

exports.getFile = function (req, res) {
  res.json({func: 'getFiles'});
};

exports.listDaemons = function (req, res) {
  Daemon.find({}, function (err, Daemon) {
    if (err)
      res.send(err);
    else
      res.json(Daemon)
  });
  //res.json({func: 'listDaemons'});
};

exports.putDaemon = function (req, res) {
  var tmp = new Daemon({
    hostname:"titi",
    ip: "13.37.13.37",
    storageLeft: 512
  });
  tmp.save(function (err) {
    if (err)
      res.json(err);
    else
      res.json({saved: tmp});
  });
};

exports.getDaemon = function (req, res) {
  res.json({func: 'getDaemon'});
};
'use strict';

var mongoose = require('mongoose');
var Daemon = mongoose.model('Daemon');
var File = mongoose.model('File');

exports.listFiles = function (req, res) {
  File.find({})
    .populate("partOne").populate("partTwo")
    .exec(function (err, File) {
    if (err)
      res.send(err);
    else {
      //console.log(File.partOne[0].ip);
      res.json(File);
    }
  });
};

exports.putFile = function (req, res) {
  Daemon.findOne({}, function (err, Daemon) {
    var tmp = new File({
      name: "toto",
      size: 10,
      partOne: [Daemon._id],
      partTwo: [Daemon._id]
    });
    tmp.save(function (err) {
      if (err)
        res.json(err);
      else
        res.json({saved: tmp});
    });
  })
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
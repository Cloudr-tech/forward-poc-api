'use strict';

var mongoose = require('mongoose');
var Daemon = mongoose.model('Daemon');
var File = mongoose.model('File');

exports.listFiles = function (req, res) {
  File.find({})
    //.populate("partOne").populate("partTwo")
    .exec(function (err, files) {
    if (err)
      res.send({status: false, message: "An error has occured"});
    else {
      res.json({status: true, message: "OK", data: files});
    }
  });
};

exports.putFile = function (req, res) {
  var tmp = new File(req.body);
  tmp.save(function (err) {
    if (err)
      res.json({status:false, message: "An error has occured"});
    else
      res.json({status: true, message: "OK", data: tmp});
  })
};

exports.getFile = function (req, res) {
  res.json({func: 'getFiles'});
};

exports.rmFile = function (req, res) {
  if (req.body.uid) {
      File.remove({uid: req.body.uid}, function (err) {
          if (err) {
              res.json({status: false, message: "File not found"});
          } else {
              res.json({status: true, message: "OK", data: null});
          }
      });
  } else {
    res.json({status: false, message: "An error has occured"});
  }
};

exports.listDaemons = function (req, res) {
  Daemon.find({}, function (err, Daemon) {
    if (err)
      res.json({status:false, message: "An error has occured"});
    else
      res.json({status: true, message: "OK", data: Daemon});
  });
  //res.json({func: 'listDaemons'});
};

exports.putDaemon = function (req, res) {
  var tmp = new Daemon(req.body);
  tmp.save(function (err) {
    if (err)
      res.json({status: false, message: "An error has occured"});
    else
      res.json({status: true, message: "OK", data: tmp});
  });
};

exports.updateDaemon = function (req, res) {
  req.body.timeStamp = Math.floor(Date.now() / 1000);
  if (req.body.ip) {
    Daemon.findOneAndUpdate({ip: req.body.ip}, req.body, {upsert: true}, function (err) {
      if (err)
        res.json({status: false, message: "An error has occured"});
      else {
        Daemon.findOne({ip: req.body.ip}, function (err, daemon) {
          if (err)
            res.json({status: false, message: "An error has occured"});
          else
            res.json({status: true, message: "OK", data: daemon});
        })
      }
    });
  } else {
    res.json({status: false, message: "An error has occured"});
  }
};

exports.resetDb = function(req, res) {
  Daemon.remove({}, function (err) {
    if (err)
      res.json({status: false, message: "An error has occured"});
    else {
      File.remove({}, function(err) {
        if (err)
          res.json({status: false, message: "An error has occured"});
        else
          res.json({status: true, message: "OK", data: null})
      })
    }
  })
}

exports.getDaemon = function (req, res) {
  res.json({func: 'getDaemon'});
};

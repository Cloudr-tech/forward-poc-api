'use strict';

exports.listFiles = function (req, res, err) {
  res.json({func: 'listFiles'});
};

exports.putFile = function (req, res, err) {
  res.json({func: 'putFiles'});
};

exports.getFile = function (req, res, err) {
  res.json({func: 'getFiles'});
};

exports.listDaemons = function (req, res, err) {
  res.json({func: 'listDaemons'});
};

exports.putDaemon = function (req, res, err) {
  res.json({func: 'putDaemon'});
};

exports.getDaemon = function (req, res, err) {
  res.json({func: 'getDaemon'});
};
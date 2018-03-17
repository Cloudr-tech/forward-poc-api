var express = require('express');
var app = express();
var cors = require('cors');
var port = process.env.PORT || 8080;
var db = process.env.DB || "localhost";
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var routes = require('./api/routes/ApiRoutes');
var model = require('./api/models/Schemas.js');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://' + db + '/pocApiDb');

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);
app.use(function(req, res) {
  res.status(404).json({status: false, message: req.originalUrl + ' not found', data: null})
});
app.listen(port);

console.log('REST API started on: ' + port);

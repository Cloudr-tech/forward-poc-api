'use strict';
module.exports = function(app) {
  var api = require('../controllers/ApiController');

  // api Routes
  app.route('/files')
    .get(api.listFiles)
		.put(api.putFile);

	// app.route('/files/:fileId')
	// 	.get(api.getFile);

  app.route('/daemons')
    .get(api.listDaemons)
    .put(api.putDaemon)
    .patch(api.updateDaemon);

  // app.route('/daemons/:daemonId')
		// .get(api.getFile)

  app.route('/reset')
    .delete(api.resetDb);
};
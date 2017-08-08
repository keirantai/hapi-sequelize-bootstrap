'use strict';

let db = require('../models/index');
let Umzug = require('umzug');
let umzug = new Umzug({
	storage: 'sequelize',

  storageOptions: {
      sequelize: db.sequelize,
  },

  migrations: {
      params: [db.sequelize.getQueryInterface(), db.sequelize.constructor, function() {
          throw new Error('Migration tried to use old style "done" callback. Please upgrade to "umzug" and return a promise instead.');
      }],
      path: '../migrations',
      pattern: /\.js$/
  }
});

umzug.up().then(migrations => {
	console.log('Migration completed!');
	process.exit();
});

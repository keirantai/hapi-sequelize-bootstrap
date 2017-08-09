'use strict';

const Sequelize = require('sequelize');
const path = require('path');
const config = require('config').database;
const utils = require('../libs/utils');

// initialize database connection
var sequelize = new Sequelize(
	config.name,
	config.username,
	config.password,
	config.options
);

// load models
let models = require('config').models;
models.forEach((modelFilename) => {
	let model = utils.upperCamel(modelFilename);
	module.exports[model] = sequelize.import(path.join(__dirname, modelFilename));
});

// describe relationships
((m) => {
	// Sample: m.ModelName.belongsTo(m.AnotherModelName);
})(module.exports);

// export connection
module.exports.sequelize = sequelize;
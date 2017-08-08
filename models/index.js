'use strict';

const Sequelize = require('sequelize');
const config = require('config').database;
const path = require('path');

// initialize database connection
var sequelize = new Sequelize(
	config.name,
	config.username,
	config.password,
	config.options
);

// load models
var models = [
	// Sample: 'ModelName'
	'Sample'
];
models.forEach((model) => {
	module.exports[model] = sequelize.import(path.join(__dirname, model.toLowerCase()));
});

// describe relationships
((m) => {
	// Sample: m.ModelName.belongsTo(m.AnotherModelName);
})(module.exports);

// export connection
module.exports.sequelize = sequelize;
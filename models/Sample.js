'use strict';

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Sample', {
		content: DataTypes.STRING
	}, {
		instanceMethods: {
			countTasks: function() {
			  // how to implement this method ?
			}
		}
	});
};
'use strict';
module.exports = function(sequelize, DataTypes) {
  var Sample = sequelize.define('Sample', {
    content: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Sample;
};
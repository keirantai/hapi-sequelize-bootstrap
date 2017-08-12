'use strict';

let fs = require('fs');
let path = require('path');
let utils = require('../libs/utils');

class Factory {

	static create(ctrlName, modelName) {
		// if no modelName, use controller name as model name.
		modelName = modelName || utils.upperCamel(ctrlName);
		// import controller
		let ctrlPath = path.join('.', ctrlName);
		if (fs.existsSync(ctrlPath)) {
			let Controller = require(ctrlPath);
		}
		let Controller = require('./base-controller');
		return new Controller(modelName);
	}

}

module.exports = Factory;
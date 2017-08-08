'use strict';

let BaseController = require('./base_controller');

class Sample extends BaseController {

	static create() {
		return new Sample('Sample');
	}
}

module.exports = Sample;
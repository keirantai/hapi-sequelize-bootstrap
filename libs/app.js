'use strict';

class App {

	constructor() {
		this.models = {};
	}

	set(name, value) {
		this.models[name] = value;
	}

	get(name) {
		return this.models[name];
	}
	
}

module.exports = new App();
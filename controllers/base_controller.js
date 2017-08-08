'use strict';

let app = require('../libs/app');

class BaseController {

	/**
	 * Create a new instance of this class.
	 * @param  string modelName Name of the data model
	 * @return BaseController
	 */
	static create(modelName) {
		return new BaseController(modelName);
	}

	/**
	 * Instantiate this class with provided model name.
	 * @param  string modelName Name of the data model
	 */
	constructor(modelName) {
		this.modelName = modelName;
		this.init();
	}

	/**
	 * Initialize model by provided model name
	 */
	init() {
		this.model = app.get('models')[this.modelName];
	}

	/**
	 * Get all data from the model
	 * @param  object request Request object from HAPI
	 * @param  object reply   Reply object from HAPI
	 */
	all(request, reply) {
		this.model.all()
			.then((data) => {
				reply(data);
			});
	}

	/**
	 * Get a data by ID from DB
	 * @param  object request Request object from HAPI
	 * @param  object reply   Reply object from HAPI
	 */
	get(request, reply) {
		this.model.findOne({
				where: { id: request.params.id }
			}).then((data) => {
				reply(data);
			});
	}

	/**
	 * Create a new data to DB
	 * @param  object request Request object from HAPI
	 * @param  object reply   Reply object from HAPI
	 */
	post(request, reply) {
		this.model.create(request.payload)
			.then(data => {
				reply(data);
			});
	}

	/**
	 * Update the values of a model by ID
	 * @param  object request Request object from HAPI
	 * @param  object reply   Reply object from HAPI
	 */
	put(request, reply) {
		reply('Not available');
	}

	/**
	 * Update the value of specific attribute(s) of a model by ID
	 * @param  object request Request object from HAPI
	 * @param  object reply   Reply object from HAPI
	 */
	patch(request, reply) {
		this.model.findOne({
				where: { id: request.params.id }
			}).then((data) => {
				return this.model.update(request.payload);
			}).then(data => {
				reply(data);
			});
	}

	/**
	 * Delete a data from DB by ID
	 * @param  object request Request object from HAPI
	 * @param  object reply   Reply object from HAPI
	 */
	delete(request, reply) {
		this.model.findOne({
				where: { id: request.params.id }
			}).then((data) => {
				return data.destroy();
			}).then(() => {
				reply({success: 'ok', id: request.params.id});
			});
	}
}

module.exports = BaseController;
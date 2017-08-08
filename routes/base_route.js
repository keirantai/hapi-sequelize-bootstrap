'use strict';

/**
 * Base routing method with basic restful API methods.
 * i.e. GET, POST, PUT, PATCH, DELETE
 */

const utils = require('../libs/utils');

exports.routes = (ctrlName) => {
	let ctrlNameInPlural = utils.pluralize(ctrlName).toLowerCase();
	let ctrl = require('../controllers/' + ctrlName).create();
	let routes = [
		{
			method: 'GET',
			path: '/api/' + ctrlNameInPlural,
			handler: ctrl.all.bind(ctrl)
		}
		,{
			method: 'GET',
			path: '/api/' + ctrlNameInPlural + '/{id}',
			handler: ctrl.get.bind(ctrl)
		}
		,{
			method: 'POST',
			path: '/api/' + ctrlNameInPlural,
			handler: ctrl.post.bind(ctrl)
		}
		,{
			method: 'PUT',
			path: '/api/' + ctrlNameInPlural + '/{id}',
			handler: ctrl.put.bind(ctrl)
		}
		,{
			method: 'PATCH',
			path: '/api/' + ctrlNameInPlural + '/{id}',
			handler: ctrl.patch.bind(ctrl)
		}
		,{
			method: 'DELETE',
			path: '/api/' + ctrlNameInPlural + '/{id}',
			handler: ctrl.delete.bind(ctrl)
		}
	];
	return routes;
}
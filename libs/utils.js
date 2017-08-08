'use strict';

/**
 * Pluralize a name of a subject
 * @param  {string} name Subject to convert as plural phrase
 * @return {string}
 */
exports.pluralize = (name) => {
	let nameInPlural = '';
	let last = name.split('').pop();
	if (last == 's') {
		nameInPlural = name + 'es';
	} else if (last == 'y') {
		nameInPlural = name.substr(0, name.length - 1) + 'ies';
	} else {
		nameInPlural = name + 's';
	}
	return nameInPlural;
}
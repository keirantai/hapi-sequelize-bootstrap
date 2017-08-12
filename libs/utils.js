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

/**
 * Convert phase to upper camel case.
 * e.g. this-is-a-camel to ThisIsACamel
 * @param  {string} phase       Original dash separated phase
 * @param  {string} delimitator Delimitator to convert as cammel. Default is a dash (-).
 * @return {string}             Upper camel case phase
 */
exports.upperCamel = (phase, delimitator) => {
	delimitator = delimitator || '-';
	let words = phase.split(delimitator);
	let newPhase = '';
	words.forEach(w => {
		newPhase += w.charAt(0).toUpperCase() + w.slice(1);
	});
	return newPhase;
}
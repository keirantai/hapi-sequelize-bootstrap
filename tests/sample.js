'use strict';

let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

chai.use(chaiHttp);

let endpoint = 'localhost:3000';

describe('Sample model tests', () => {

	describe('GET /api/samples', () => {
		it('It should return an array of sample objects', done => {
			chai.request(endpoint)
				.get('/api/samples')
				.end((err, res) => {
					res.body.should.be.an('array');
					done();
				});
		});
	});

});
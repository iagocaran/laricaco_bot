const express = require('express');
const router = express.Router();
const database = app.get('database');

module.exports = (app) => {
	/* GET home page. */
	router.get('/', function(req, res, next) {
		res.send('It\'s me Mario');
	});

	return router;
};

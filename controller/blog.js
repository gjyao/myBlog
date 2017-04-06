var config   = require('../config');
var post     = require('../models/post');
var category = require('../models/category');
var link     = require('../models/link');

exports.index = function (req, res, next) {
	post.findAll()
		.then(function (posts) {
			res.render('blog', {
				config: config,
				posts: post
			})
		});
};

exports.links = function (req, res, next) {
	link.findAll()
		.then(function (links) {
			res.render('links', {
				config: config,
				links: links
			});
		});
};
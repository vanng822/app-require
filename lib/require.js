var fspath = require('path');

var appRoot = process.cwd();

module.exports.setup = function(root) {
	appRoot = root;
};

module.exports.requireLib = function(path) {
	path = path || appRoot;
	return require(fspath.normalize(path) + '/lib');
};

module.exports.requireConfig = function(path) {
	path = path || appRoot;
	return require(fspath.normalize(path) + '/config');
};

module.exports.require = function(id, path) {
	path = path || appRoot;
	path = fspath.resolve(path, id);
	return require(path);
};
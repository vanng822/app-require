var fspath = require('path');

console.log(process.cwd())
var appRoot = process.cwd();

module.exports.setup = function(root) {
	appRoot = fspath.normalize(root);
};

module.exports.requireLib = function(path) {
	path = path? fspath.normalize(path) : appRoot;
	return require(path + '/lib');
};

module.exports.requireConfig = function(path) {
	path = path? fspath.normalize(path) : appRoot;
	return require(path + '/config');
};

module.exports.require = function(id, path) {
	path = path? fspath.normalize(path) : appRoot;
	return require(fspath.resolve(path, id));
};
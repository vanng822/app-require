var fspath = require('path');

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

module.exports.merge = function(exports, path, /*libs to include */) {
	var feature, i, len, libfeatures, libname, obj;
	for(i = 2, len = arguments.length; i < len; i++) {
		libname = arguments[i];
		libfeatures = require(path + libname + '.js');
		obj = exports;
		if (libfeatures.__namespace__ && libfeatures.__namespace__ != "") {
			if (!obj.hasOwnProperty(libfeatures.__namespace__)) {
				obj[libfeatures.__namespace__] = {};
			}
			obj = obj[libfeatures.__namespace__];
		}
		for(feature in libfeatures) {
			if (feature == '__namespace__') {
				continue;
			}
			if (obj.hasOwnProperty(feature)) {
				throw new Error('Feature exists: ' + feature);
			}
			obj[feature] = libfeatures[feature];
		}
	}
	return exports;
};


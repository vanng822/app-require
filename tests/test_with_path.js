var assert = require('assert');

var vows = require('vows');

var appRequire = require('../lib/require.js');
var appPath = __dirname + '/app';

vows.describe('Test suite for app require set new root').addBatch({
	'require config' : function() {
		var config = appRequire.requireConfig(appPath);
		assert.ok(config.someconfig);
	},
	'require lib' : function() {
		var lib = appRequire.requireLib(appPath);
		assert.ok(lib.somelib);
	},
	'require': function() {
		var lib = appRequire.require('somefolder/somelib.js', appPath);
		assert.ok(lib.somefolder.somelib);
	}
}).export(module);

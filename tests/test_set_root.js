var assert = require('assert');

var vows = require('vows');

var appRequire = require('../lib/require.js');
appRequire.setup(__dirname);
		
vows.describe('Test suite for app require set new root').addBatch({
	'require config' : function() {
		var config = appRequire.requireConfig();
		assert.ok(config.someconfig);
	},
	'require lib' : function() {
		var lib = appRequire.requireLib();
		assert.ok(lib.somelib);
	},
	'require': function() {
		var lib = appRequire.require('somefolder/somelib.js');
		assert.ok(lib.somefolder.somelib);
	}
}).export(module);

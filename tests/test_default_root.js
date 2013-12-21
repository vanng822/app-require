var assert = require('assert');

var vows = require('vows');
process.chdir(__dirname + '/app');
var appRequire = require('../lib/require.js');

vows.describe('Test suite for app require default path').addBatch({
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

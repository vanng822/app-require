var assert = require('assert');

var vows = require('vows');
var appRequire;
process.chdir(__dirname + '/app');
console.log(process.cwd())

appRequire = require('../lib/require.js');

console.log(process.cwd())

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

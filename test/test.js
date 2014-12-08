require('chai').should();

var jade = require('jade');
var jadeTraceur = require('..');

describe('compile', function(){
	var expected ='<html><header></header><body><script>\"use strict\";\n\nvar Test = function Test(test) {\n  this.test = test;\n};</script></body></html>';
	it('should be the right compiled output', function(){
		var jadeT = jadeTraceur({}, jade);
		var compiled = jadeT.compileFile('./test/jade/test.jade');
		var result = compiled();
		result.should.be.equal(expected);
	});
});

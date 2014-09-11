var traceur = require('traceur');
var Compiler = traceur.NodeCompiler;
module.exports = function(options, jade){
	var filter = function(contents){

		var compiler = new Compiler(traceur.commonJSOptions(options));
		return compiler.compile(contents);
	}
	if(jade){
		jade.filters.traceur = filter;
		return jade;
	}
	else return filter;
}

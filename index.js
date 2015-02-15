var babel = require('babel-core');

module.exports = function(options, jade){
	var filter = function(contents){
		return babel.transform(contents, options).code;
	}
	if(jade){
		jade.filters.babel = filter;
		return jade;
	}
	else return filter;
}

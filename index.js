var to5 = require('6to5-core');

module.exports = function(options, jade){
	var filter = function(contents){
		return to5.transform(contents, options).code;
	}
	if(jade){
		jade.filters.to5 = filter;
		return jade;
	}
	else return filter;
}

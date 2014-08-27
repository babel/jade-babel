var traceur = require('traceur');
module.exports = function(options, jade){
	var filter = function(contents){
		return traceur.compile(contents, options).js;
	}
	if(jade){
		jade.filters.traceur = filter;
		return jade;
	}
	else return filter;
}
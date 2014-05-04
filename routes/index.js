/*
 * GET home page.
 */

exports.index = function(req, res){
	//Temporarily just using plain HTML file for now
	//res.render('index', { title: 'Coinbase Markets' });
	
	res.render('index.html');
};
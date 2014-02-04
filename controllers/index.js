
module.exports = function(app) {
	
	//Change this later
	data = new Array();
	
	app.get('/', function(req, res) {
	
		res.render('index', { title: 'Coinbase Markets', data:data });
	
	});
};
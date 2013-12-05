
module.exports = function(app, data) {
	
	app.get('/', function(req, res) {
	
		res.render('index', { title: 'Coinbase Markets', data:data });
	
	});
};
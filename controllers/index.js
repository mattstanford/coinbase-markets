
module.exports = function(app, priceModel) {
	
	//Change this later
	data = new Array();
	
	app.get('/', function(req, res) {
		
	  priceModel.getPrices(true, 5, 
		
	    function(result) {
		  console.log(result);
		  res.render('index', { title: 'Coinbase Markets', data:result.rows });
	    },
	    function(reason) {
		  
	    });
	
	});
};
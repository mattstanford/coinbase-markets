
/**
 * This file handles the Price model
 */

var db_success_callback = function(err, result) {
	
	if(err) {
		 console.log(err);
	 }
	 else {
		 console.log("Query success!");
	 }
};

var db_error_callback =    function(reason) {
	console.log("General DB error");
	console.log(reason);
};

module.exports = function(db) {
	
	return {
		
		addPriceToDB: function(isBuyPrice, priceObject) {
			
			var tableName = isBuyPrice ? "Buy" : "Sell";
			var timeposted = "NOW()";
			var price = priceObject.amount;
			
			var queryString = "INSERT INTO " + tableName + "(timeposted, price) VALUES(" + timeposted + "," + price + ")";
			console.log(queryString);
			
			db.query(queryString).then(db_success_callback, db_error_callback);
			
		}
		
	};
};
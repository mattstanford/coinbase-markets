
module.exports = function(priceModel) {
	
	var $ = require('jquery');
	var temp = 0;

	function receivedCoinbaseData(data) {
	
		console.log("Got coinbase data: " + data.amount);
		priceModel.addPriceToDB(true, data);
	
	}

	setInterval(function() {
		$.getJSON("https://coinbase.com/api/v1/prices/buy", receivedCoinbaseData);
		temp = temp + 1;
		//graphData.push(temp);

	}, 60000);
	
};



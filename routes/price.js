module.exports = function(priceModel) {
	
	return {

		buyPrices: function(req, res){

			priceModel.getPrices(true, 10, 
		
					function(result) {
						  console.log("got prices" + result);
						  res.send(result.rows);
					    },
					    function(reason) {
						  
					    });
 
			}
 
	};
};
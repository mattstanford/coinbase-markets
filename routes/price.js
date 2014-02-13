module.exports = function(priceModel) {
	
	return {

		buyPrices: function(req, res){

			priceModel.getPrices(true, 5, 
		
					function(result) {
						  console.log("got prices" + result);
						  res.send(result.rows);
					    },
					    function(reason) {
						  
					    });
 
			}
 
	};
};
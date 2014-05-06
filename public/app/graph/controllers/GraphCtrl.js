
angular.module('coinbaseMarkets').controller('GraphCtrl', function ($scope) 
{
	$scope.onBuyClick = function() {
        console.log("Buy");
    }
	
	$scope.onSellClick = function() {
        console.log("Sell");
    }
 
});
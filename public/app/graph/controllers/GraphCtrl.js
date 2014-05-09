
angular.module('coinbaseMarkets').controller('GraphCtrl', function ($scope, coinbaseMarketsService) 
{
	$scope.testVar = 0;
	
	$scope.onBuyClick = function() {
        console.log("Buy");
        $scope.testVar = 1;
        
        coinbaseMarketsService.testFunction();
        
    }
	
	$scope.onSellClick = function() {
        console.log("Sell");
        $scope.testVar = 2;
    }
 
});
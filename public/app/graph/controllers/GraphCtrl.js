
angular.module('coinbaseMarkets').controller('GraphCtrl', function ($scope) 
{
	$scope.testVar = 0;
	
	$scope.onBuyClick = function() {
        console.log("Buy");
        $scope.testVar = 1;
        
    }
	
	$scope.onSellClick = function() {
        console.log("Sell");
        $scope.testVar = 2;
    }
 
});
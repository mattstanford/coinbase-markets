
angular.module('coinbaseMarkets').controller('GraphCtrl', function ($scope, coinbaseMarketsService) 
{
	$scope.data = [];
	$scope.currentCategory = "Buy";
	
	$scope.onBuyClick = function() {
        $scope.currentCategory = "Buy";
        coinbaseMarketsService.getBuyData(coinbaseDataReceived);       
    }
	
	$scope.onSellClick = function() {
        $scope.currentCategory = "Sell";
        coinbaseMarketsService.getSellData(coinbaseDataReceived);
    }
	
	$scope.onRefreshClick = function() {
		
		
	}
	
	function coinbaseDataReceived(data)
	{
		$scope.$apply(function() {
			console.log("data received: " + data);
			$scope.data = data;
		})

	}
 
});
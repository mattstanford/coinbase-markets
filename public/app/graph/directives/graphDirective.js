
angular.module('coinbaseMarkets').directive('cbmGraph', function () 
{
	return function ($scope, element, attrs) 
	{
		console.log("directive doing stuff");
		
		$scope.$watch('testVar', function() {
			console.log("testVar changed!");
		})
		
	}
});
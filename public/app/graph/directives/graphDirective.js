
angular.module('coinbaseMarkets').directive('cbmGraph', function () 
{
	 return {
		 restrict: 'E',
		 scope: true,
		 link: function (scope, element) {

			console.log("directive doing stuff");
			
			scope.$watch('testVar', function() {
				console.log("testVar changed!");
			});
		}
	 }
});
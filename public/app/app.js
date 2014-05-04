
 var coinbaseMarketsApp = angular.module('coinbaseMarkets', []);
 

 coinbaseMarketsApp.config(function ($routeProvider) {
           
	$routeProvider
    	.when('/',
        {
          controller: 'graphController'
          //templateUrl: 'Partials/View1.html'
        })
        .otherwise({ redirectTo: '/' });
 });
 
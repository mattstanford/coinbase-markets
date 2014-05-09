angular.module('coinbaseMarkets').service('coinbaseMarketsService', function () 
{
	var buyLink = "/buyPrices";
	var sellLink = "/sellPrices";
	
	this.getBuyData = function(successCallback)
	{
		getData(buyLink, successCallback);
	}
	
	this.getSellData = function(successCallback)
	{
		getData(sellLink, successCallback);
	}
	
	function getData(requestLink, successCallback)
	{
		$.getJSON(requestLink, successCallback);
	}
	
});
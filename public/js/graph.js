
(function() {
	
	window.onload = function() {
		
		//For now just using test data
		var test_data = [1,2,3,4,5,6,7,8,9,10];
		coinbaseDataReceived(test_data);
	};
	
	//This will eventually become a callback funciton
	function coinbaseDataReceived(data) {
		
		drawGraph(data);
		
	}
	
	function drawGraph(data) {
		
	}
	
})();

(function() {
	
	window.onload = function() {
		
		//For now just using test data
		var test_data = [1,2,3,4,5,6,7,8,9,10];
		coinbaseDataReceived(test_data);
	};
	
	//This will eventually become a callback funciton
	function coinbaseDataReceived(server_data) {
		
		drawGraph(server_data);
		
	}
	
	function drawGraph(server_data) {
		
		var graph = d3.select("#coinbase-graph");
		var graphHeight = $("#coinbase-graph").height();
		var graphWidth = $("#coinbase-graph").width();
		var graphMargin = 40;	
		var y_scale = getYScale(server_data, graphHeight, graphMargin);	
		var x_scale = getXScale(server_data, graphWidth, graphMargin);
	
		drawGraph_data(graph, server_data, x_scale, y_scale);

	}
	
	function drawGraph_data(graph, server_data, x_scale, y_scale)
	{
			graph.selectAll("circle")
				.data(server_data)
				.enter().append("circle")
				.attr("cy", function(d) { return y_scale(d); })
				.attr("cx", function(d,i) { return x_scale(i); })
				.attr("r", 8)
				.attr("fill", "red");
	}
	
function getYScale(server_data, graphHeight, graphMargin) {
		
		var max_value = Math.max.apply(Math, server_data);
		
		//Give the max value a little bit of a buffer
		max_value = max_value + (10 - (max_value % 10));
		
		var y_scale = d3.scale.linear()
			.domain([0, max_value])
			.range([0 + graphMargin, graphHeight - graphMargin]);
		
		return y_scale;
		
	}
	
	function getXScale(server_data, graphWidth, graphMargin) {
		
		var max_value = server_data.length;
		
		var x_scale = d3.scale.linear()
		.domain([max_value,0])
		.range([0 + graphMargin, graphWidth - graphMargin]);
		
		return x_scale;
	}
	
})();

(function() {
	
	//Data model for the points we will be graphing
	function PricePoint(price, timestamp) 
	{	
		this.price = price;
		this.timestamp = timestamp;
	}
	
	window.onload = function() {
		
		//For now just using test data
		//var test_data = [1,2,3,4,5,6,7,8,9,10];
		var test_data = [new PricePoint(1, Date.now()-5000),
		                 new PricePoint(2, Date.now()-4000),
		                 new PricePoint(3, Date.now()-3000),
		                 new PricePoint(4, Date.now()-2000),
		                 new PricePoint(5, Date.now()-1000),
		                 new PricePoint(6, Date.now())];
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
		var color = "red";
		drawGraph_data_points(graph, server_data, x_scale, y_scale, color);
		drawGraph_data_line(graph, server_data, x_scale, y_scale, color);

	}
	
	function drawGraph_data_points(graph, server_data, x_scale, y_scale, color)
	{
		graph.selectAll("circle")
			.data(server_data)
			.enter().append("circle")
			.attr("cy", function(d) { return y_scale(d["price"]); })
			.attr("cx", function(d) { return x_scale(d["timestamp"]); })
			.attr("r", 8)
			.attr("fill", color);
	}
	
	function drawGraph_data_line(graph, server_data, x_scale, y_scale, color)
	{
		var lineFunction = d3.svg.line()
        	.x(function(d) { return x_scale(new Date(d.timestamp)); })
        	.y(function(d) { return y_scale(d.price); })
        	.interpolate("linear");
		
		 graph.append("path")
	      .attr("d", lineFunction(server_data))
	      .attr("stroke", color)
	      .attr("stroke-width", 2)
	      .attr("fill", "none");
	}
	
function getYScale(server_data, graphHeight, graphMargin) {
		
		var max_value = getMaxValue(server_data, "price");
		
		//Give the max value a little bit of a buffer
		max_value = max_value + (10 - (max_value % 10));
		
		var y_scale = d3.scale.linear()
			.domain([max_value, 0])
			.range([0 + graphMargin, graphHeight - graphMargin]);
		
		return y_scale;
		
	}
	
	function getXScale(server_data, graphWidth, graphMargin) {
		
		var minDate = getMinValue(server_data, "timestamp");
		var maxDate = getMaxValue(server_data, "timestamp");
		
		var x_scale = d3.time.scale()
			.domain([minDate, maxDate])
			.range([0 + graphMargin, graphWidth - graphMargin]);
		
		return x_scale;
	}
	
	function getMaxValue(dataArray, property)
	{
		var max_value =  Math.max.apply(Math, $.map(dataArray, 
				function (data) { 
					return data[property]; 
				}));
		
		return max_value;
	}
	
	function getMinValue(dataArray, property)
	{
		var max_value =  Math.min.apply(Math, $.map(dataArray, 
				function (data) { 
					return data[property]; 
				}));
		
		return max_value;
	}
	
})();
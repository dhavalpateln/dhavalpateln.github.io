(function () {
	
	var workData = [
		{
			id: "samsung",
			org: "Samsung",
			div: document.getElementById('samsung-container'),
			keywords: ['android', 'java', 'c', 'oop', 'jira', 'git', 'html', 'css', 'javascript'],
			start: new Date(2018, 0, 11, 0, 0, 0),
			end: new Date(2018, 4, 7, 0, 0, 0)
		},
		{
			id: "uopx",
			org: "University of Phoenix",
			div: document.getElementById('uopx-container'),
			keywords: ['aws', 'java', 'python', 'oop', 'spring', 'jira', 'git', 'sql', 'postman', 'nodejs', 'intellij'],
			start: new Date(2019, 4, 25, 0, 0, 0),
			end: new Date(2019, 10, 24, 0, 0, 0)
		},
		{
			id: "civic",
			org: "Civic Infotech",
			div: document.getElementById('civic-container'),
			keywords: ['java', 'oop'],
			start: new Date(2016, 4, 1, 0, 0, 0),
			end: new Date(2016, 7, 5, 0, 0, 0)
		}
	];
	
	var educationData = [
		{
			id: "nirma",
			org: "Nirma University",
			div: document.getElementById('nirma-container'),
			start: new Date(2014, 7, 15, 0, 0, 0),
			end: new Date(2018, 4, 15, 0, 0, 0)
		},
		{
			id: "asu",
			org: "Arizona State University",
			div: document.getElementById('asu-container'),
			start: new Date(2018, 7, 4, 0, 0, 0),
			end: new Date(2020, 4, 11, 0, 0, 0)
		}
	];
	
	workData.forEach(d => $(d.div).slideUp(0));
	educationData.forEach(d => $(d.div).slideUp(0));
	
	var selected = 'none';
	var container = d3.select('#workedu-container');
	var leftSVG = d3.select('#workedu-container-left').append("svg").attr('width', '100%').attr('height', '100%');
	var rightSVG = d3.select('#workedu-container-right').append("svg").attr('width', '100%').attr('height', '100%');
	var tooltip = d3.select("body")
		.append("div")
		.style("position", "absolute")
		.style("z-index", "10")
		.style("visibility", "hidden")
		//.style("background", "white")
		//.style("color", "black")
		//.style("border-radius", "6px")
		//.style("text-align", "center")
		//.style("padding", "5px")
		.style("white-space", "pre-line")
		.attr("class", "tooltip");
	
	var highlight = function(id) {
		d3.select('#' + id).transition()
			.attr("stroke", "white")
			.attr("stroke-width", "5px");
	}
	
	var removeHighlight = function(id) {
		d3.select('#' + id).transition()
			.attr("stroke", "white")
			.attr("stroke-width", "0px");
	}
	
	function selectExp(id) {
		if(selected == id) {
			id = 'none';
		}
		selected = id;
		
		workData.forEach(function(d){
			if(id == d.id) {
				d3.select('#' + d.id).classed('exp-selected', true);
				$(d.div).slideDown();
			}
			else {
				d3.select('#' + d.id).classed('exp-selected', false);
				$(d.div).slideUp();
			}
		});
		
		educationData.forEach(function(d){
			if(id == d.id) {
				d3.select('#' + d.id).classed('exp-selected', true);
				$(d.div).slideDown();
			}
			else {
				d3.select('#' + d.id).classed('exp-selected', false);
				$(d.div).slideUp();
			}
		});
	}
	
	function satisfiesFilter(filterKeywords, expKeywords, type) {
		if(filterKeywords.length == 0)	{return true;}
		if(type == "all") {
			var toret = true;
			filterKeywords.forEach(function(d) {
				if(!expKeywords.includes(d)) {
					toret = false;
				}
			});
			return toret;
		}
		else {
			var toret = false;
			filterKeywords.forEach(function(d) {
				if(expKeywords.includes(d)) {
					toret=true;
				}
			});
			return toret;
		}
	}
	
	function highlightByKeywords(keywords, type) {
		workData.forEach(function(d){
			if(satisfiesFilter(keywords, d.keywords, type)) {
				d3.select('#' + d.id).classed('exp-highlighted', true);
			}
			else {
				d3.select('#' + d.id).classed('exp-highlighted', false);
			}
		});
	}
	
	var workRects = rightSVG.selectAll('.ganttrect').data(workData)
						.enter()
						.append("rect")
						.attr("id", d => d.id)
						.attr("class", "gantt-rects")
						.attr("rx", 10)
						.attr("ry", 10)
						.on("mouseover", function(d){
							highlight(d.id);
							return tooltip.style("visibility", "visible");}
						)
						.on("mousemove", function(d){
							var htmlText = "<b>" + d.org + "</b><br><small>Click for more details</small>"
							return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").html(htmlText);
						})
						.on("mouseout", function(d){
							removeHighlight(d.id);
							return tooltip.style("visibility", "hidden");}
						);
	
	var eduRects = rightSVG.selectAll('.ganttrect').data(educationData)
						.enter()
						.append("rect")
						.attr("id", d => d.id)
						.attr("class", "gantt-rects")
						.attr("rx", 10)
						.attr("ry", 10)
						.on("mouseover", function(d){
							highlight(d.id);
							return tooltip.style("visibility", "visible");}
						)
						.on("mousemove", function(d){
							var htmlText = "<b>" + d.org + "</b><br><small>Click for more details</small>"
							return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").html(htmlText);
						})
						.on("mouseout", function(d){
							removeHighlight(d.id);
							return tooltip.style("visibility", "hidden");}
						);
											
	d3.selectAll('.gantt-rects')
			.on("click", function(d) {
				selectExp(d.id);
			});
											
	var margin = {top: 30, right: 20, bottom: 30, left: 50};
	
	var xScale = d3.scaleTime().domain([
		new Date(Math.min(d3.min(workData, function(d) { return d.start;}), d3.min(educationData, function(d) { return d.start;})) - 2592000000),
		new Date(Math.max(d3.max(workData, function(d) { return d.end;}), d3.max(educationData, function(d) { return d.end;})) + 2592000000)
	]);
	
	var yScale = d3.scaleBand().padding(0.2)
					.domain(['Work', 'Education']);
	var yAxis = leftSVG.append("g").style("font-weight", "900");
	var xAxis = rightSVG.append("g").style("font-weight", "900");
			
	
	
	new ResizeObserver(function() {
		var leftWidth = $("#workedu-container-left").width();
		var rightWidth = $("#workedu-container-right").width();
		var height = $("#workedu-container").height();
		
		yScale.range([0 + margin.top, height - margin.bottom]);
		xScale.range([0, rightWidth - margin.right]);
		
		yAxis.attr('transform', 'translate(' + (leftWidth - 10) + ',' + (0) + ')').call(d3.axisLeft(yScale));
		xAxis.attr('transform', 'translate(' + (0) + ',' + (height - margin.bottom) + ')').call(d3.axisBottom(xScale));
		
		workRects.attr("x", d => xScale(d.start))
				 .attr("y", yScale('Work'))
				 .attr("width", d => (xScale(d.end) - xScale(d.start)))
				 .attr("height", yScale.bandwidth());
				 //.attr('transform', 'translate(' + (0) + ',' + (margin.top) + ')');
				 
		eduRects.attr("x", d => xScale(d.start))
				 .attr("y", yScale('Education'))
				 .attr("width", d => (xScale(d.end) - xScale(d.start)))
				 .attr("height", yScale.bandwidth());
				 //.attr('transform', 'translate(' + (0) + ',' + (margin.top) + ')');
		
	}).observe(document.getElementById('workedu-container'));
	
	window.workedu = {
		selectExp: selectExp,
		highlight: highlightByKeywords
	};
}());